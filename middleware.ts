import {
  NextResponse,
  NextRequest,
  NextMiddleware,
  NextFetchEvent,
} from "next/server";
import { jwtVerify, importSPKI } from "jose";

// RSA Key setup for middleware
const getPublicKey = async () => {
  const publicKeyPem = process.env.JWT_PUBLIC_KEY;
  if (!publicKeyPem) {
    throw new Error('JWT_PUBLIC_KEY environment variable is not set');
  }
  
  // If the key is base64 encoded, decode it
  const key = publicKeyPem.includes('-----BEGIN') 
    ? publicKeyPem 
    : Buffer.from(publicKeyPem, 'base64').toString();
    
  return await importSPKI(key, 'RS256');
};

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

// Default protected routes
const DEFAULT_PROTECTED_ROUTES = [
  '/profile',
  '/settings',
  '/store',
  '/api/protected'
];

// Middleware to handle protected routes that require authentication
const protectedRoutesMiddleware = (protectedPaths: string[] = DEFAULT_PROTECTED_ROUTES): NextMiddleware => {
  return async (request: NextRequest) => {
    const { pathname } = request.nextUrl;
    
    // Check if the current path matches any protected route
    const isProtectedRoute = protectedPaths.some(route => 
      pathname === route || pathname.startsWith(`${route}/`)
    );
    
    // If not a protected route, skip this middleware
    if (!isProtectedRoute) {
      return NextResponse.next();
    }
    
    const sessionCookie = request.cookies.get("session");
    
    // No session cookie, redirect to login
    if (!sessionCookie) {
      return NextResponse.redirect(new URL("/auth?tab=login", request.url));
    }
    
    // Verify the JWT token
    try {
      const publicKey = await getPublicKey();
      await jwtVerify(sessionCookie.value, publicKey, { algorithms: ["RS256"] });
      // JWT is valid, allow access to protected route
      return NextResponse.next();
    } catch (err) {
      console.error("[Protected Routes Middleware] Invalid JWT:", err);
      // Invalid token, redirect to login
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  };
};

// Middleware to redirect authenticated users away from auth pages
const authMiddleware: NextMiddleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const isAuthPage = pathname.startsWith("/auth");
  
  // If not an auth page, skip this middleware
  if (!isAuthPage) {
    return NextResponse.next();
  }
  
  const sessionCookie = request.cookies.get("session");
  
  // No session cookie, allow access to auth pages
  if (!sessionCookie) {
    return NextResponse.next();
  }
  
  // Verify the JWT token
  try {
    const publicKey = await getPublicKey();
    await jwtVerify(sessionCookie.value, publicKey, { algorithms: ["RS256"] });
    // JWT is valid, redirect authenticated users away from auth pages
    return NextResponse.redirect(new URL("/", request.url));
  } catch (error) {
    // Invalid token, allow access to auth pages
    return NextResponse.next();
  }
};

export function middleware(request: NextRequest, event: NextFetchEvent) {
  // Use both middlewares: first check if it's a protected route, then handle auth pages
  return mwHelper(
    protectedRoutesMiddleware(), // Use default protected routes
    authMiddleware
  )(request, event);
}
