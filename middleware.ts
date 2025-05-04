import {
  NextResponse,
  NextRequest,
  NextMiddleware,
  NextFetchEvent,
} from "next/server";
import { jwtVerify } from "jose";
import { redirect } from "next/navigation";

function mwHelper(...args: NextMiddleware[]) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    try {
      for (const mw of args) {
        const response = await mw(request, event);
        if (response) {
          return response; // short-circuit if middleware returns a response
        }
      }
      return NextResponse.next(); // all middlewares passed
    } catch (err) {
      console.error("[Middleware Error]", err);
      // Fail safe: maybe redirect or return error page
      return NextResponse.redirect(new URL("/500", request.url)); // example: custom error page
    }
  };
}

// if logged in, redirect to home page
// if not logged in, allow access to login and register pages
const loginMW: NextMiddleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const isLoginPage = pathname.startsWith("/login");
  const isRegisterPage = pathname.startsWith("/register");
  const sessionCookie = request.cookies.get("session");
  if (sessionCookie && (isLoginPage || isRegisterPage)) {
    try {
      const { payload, protectedHeader } = await jwtVerify(
        sessionCookie.value,
        new TextEncoder().encode(process.env.JWT_SECRET)
      );
      console.log(payload, protectedHeader);
      return NextResponse.redirect(new URL("/", request.url));
    } catch (error) {
      return NextResponse.next();
    }
  }
  return NextResponse.next();
};

export function middleware(request: NextRequest, event: NextFetchEvent) {
  return mwHelper(loginMW)(request, event);
}
