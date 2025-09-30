import { NextRequest, NextResponse } from "next/server";

const publicRoutes = new Set(["/", "/login", "/signup", "/strava/callback", "/runs", "/plans", "/gym", "/strava", "/settings", "/security"]);
const authCookieName = "better-auth.session_token";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  if (publicRoutes.has(path) || path.startsWith("/api") || path.startsWith("/_next")) {
    return NextResponse.next();
  }

  const sessionToken = request.cookies.get(authCookieName)?.value;
  if (!sessionToken) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", path);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|static|.*\\..*$).*)"],
};
