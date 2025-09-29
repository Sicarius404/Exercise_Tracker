import { NextRequest, NextResponse } from "next/server";

const publicRoutes = new Set(["/", "/login", "/signup", "/strava/callback"]);
const authCookieName = "session_token";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  if (publicRoutes.has(path) || path.startsWith("/api")) {
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
  matcher: ["/((?!_next|static|.*\\.w+$).*)"],
};
