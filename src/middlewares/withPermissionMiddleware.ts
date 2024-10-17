import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { CustomMiddleware } from "./chain";

export function withPermissionMiddleware(
  middleware: CustomMiddleware
): CustomMiddleware {
  return async function withPermissionMiddleware(
    req: NextRequest,
    event: NextFetchEvent,
    response: NextResponse
  ) {
    const accessToken = req.cookies.get("access-token")?.value;
    const userRole = req.cookies.get("user-roles")?.value;

    const url = new URL(req.url);
    const pathname = url.pathname;
    const locale = pathname.split("/")[1];
    const supportedLocales = ["en", "uz", "ru"];
    const currentLocale = supportedLocales.includes(locale) ? locale : "en";

    const isAuthPage =
      pathname.includes("/login") || pathname.includes("/register");
    const isPublicPage = isAuthPage || pathname.includes("/404");

    if (!accessToken && !isPublicPage) {
      //   const returnTo = encodeURIComponent(req.url);
      return NextResponse.redirect(new URL(`/${currentLocale}/login`, req.url));
    }

    if (accessToken && isAuthPage) {
      if (userRole === "admin") {
        return NextResponse.redirect(
          new URL(`/${currentLocale}/admin`, req.url)
        );
      } else if (userRole === "student") {
        return NextResponse.redirect(
          new URL(`/${currentLocale}/student`, req.url)
        );
      } else if (userRole === "teacher") {
        return NextResponse.redirect(
          new URL(`/${currentLocale}/teacher`, req.url)
        );
      }
    }

    const roleAccessMap: { [key: string]: string[] } = {
      admin: [`/${currentLocale}/admin`],
      student: [`/${currentLocale}/student`],
      teacher: [`/${currentLocale}/teacher`],
    };

    const hasAccess =
      userRole &&
      roleAccessMap[userRole]?.some((allowedPath) =>
        pathname.startsWith(allowedPath)
      );

    if (!hasAccess && !isPublicPage) {
      return NextResponse.redirect(
        new URL(`/${currentLocale}/not-found`, req.url)
      );
    }

    return middleware(req, event, response);
  };
}
