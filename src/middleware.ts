import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["tr", "en"] as const;
const defaultLocale = "tr" as const;

function hasLocale(pathname: string): boolean {
  const first = pathname.split("/")[1];
  return locales.includes(first as any);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow Next internal paths and public files
  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.match(/\.(.*)$/)) {
    return NextResponse.next();
  }

  if (!hasLocale(pathname)) {
    // Respect Accept-Language for first visit
    const header = request.headers.get("accept-language") || "";
    const preferred = header.startsWith("en") ? "en" : "tr";
    const url = request.nextUrl.clone();
    url.pathname = `/${preferred}${pathname === "/" ? "" : pathname}`;
    const res = NextResponse.redirect(url);
    res.cookies.set("locale", preferred, { path: "/" });
    return res;
  }

  // Keep cookie in sync with /tr or /en path
  const currentLocale = pathname.split("/")[1];
  const res = NextResponse.next();
  if (currentLocale === "tr" || currentLocale === "en") {
    res.cookies.set("locale", currentLocale, { path: "/" });
  }
  return res;
}

export const config = {
  matcher: ["/:path*"],
};
