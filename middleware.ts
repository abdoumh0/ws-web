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
// if not logged in, allow access to auth pages
const authMiddleware: NextMiddleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const isAuthPage = pathname.startsWith("/auth");
  const sessionCookie = request.cookies.get("session");

  // Redirect authenticated users away from auth pages
  if (sessionCookie && isAuthPage) {
    try {
      const { payload, protectedHeader } = await jwtVerify(
        sessionCookie.value,
        new TextEncoder().encode(process.env.JWT_SECRET)
      );
      return NextResponse.redirect(new URL("/", request.url));
    } catch (error) {
      // Invalid token, allow access to auth pages
      return NextResponse.next();
    }
  }

  // Handle redirects for old routes
  if (pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/auth?tab=login", request.url));
  }

  if (pathname.startsWith("/register")) {
    return NextResponse.redirect(new URL("/auth?tab=register", request.url));
  }

  return NextResponse.next();
};

export function middleware(request: NextRequest, event: NextFetchEvent) {
  return mwHelper(authMiddleware)(request, event);
}

export const config = {
  matcher: ["/login/:path*", "/register/:path*", "/auth/:path*"],
};
