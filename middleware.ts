import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
    url.pathname = "/coming-soon";
    return NextResponse.redirect(url);
  }
}
