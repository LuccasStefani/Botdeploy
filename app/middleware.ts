import { NextResponse, type NextRequest } from "next/server";

interface NextRequestWithGeo extends NextRequest {
  geo?: {
    city?: string;
    country?: string;
    region?: string;
  };
}

export function middleware(req: NextRequestWithGeo) {
  const country = req.geo?.country || "BR";
  let locale = "pt";

  if (country === "US") locale = "en";
  if (country === "ES") locale = "es";

  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${url.pathname}`;
  return NextResponse.redirect(url);
}
