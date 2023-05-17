import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const isProd = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";
  if (url.pathname !== "/coming-soon" && isProd) {
    url.pathname = "/coming-soon";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: "/*",
};
