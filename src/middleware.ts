import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const isAuthenticated = true 
  const path = req.nextUrl.pathname;

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/", req.url))
  }

  if (!isAuthenticated && path.includes("/productos")) {
    return NextResponse.redirect(new URL("/", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/productos/:path", "/productos"]
}
