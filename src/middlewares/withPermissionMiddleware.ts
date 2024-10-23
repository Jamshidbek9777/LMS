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

    if (
      pathname === "/" ||
      pathname === "/en" ||
      pathname === "/uz" ||
      pathname === "/ru"
    ) {
      if (accessToken) {
        switch (userRole) {
          case "admin":
            return NextResponse.redirect(
              new URL(`/${currentLocale}/admin`, req.url)
            );
          case "student":
            return NextResponse.redirect(
              new URL(`/${currentLocale}/student`, req.url)
            );
          case "teacher":
            return NextResponse.redirect(
              new URL(`/${currentLocale}/teacher`, req.url)
            );
          default:
            return NextResponse.redirect(
              new URL(`/${currentLocale}/login`, req.url)
            );
        }
      } else {
        return NextResponse.redirect(
          new URL(`/${currentLocale}/login`, req.url)
        );
      }
    }

    const isAuthPage =
      pathname.includes("/login") || pathname.includes("/register");
    const isPublicPage = isAuthPage || pathname.includes("/404");

    if (!accessToken && !isPublicPage) {
      const returnTo = encodeURIComponent(req.url);
      console.log("Redirecting to login, from:", pathname);
      return NextResponse.redirect(
        new URL(`/${currentLocale}/login?returnTo=${returnTo}`, req.url)
      );
    }

    if (accessToken && isAuthPage) {
      console.log("Authenticated user trying to access:", pathname);
      switch (userRole) {
        case "admin":
          return NextResponse.redirect(
            new URL(`/${currentLocale}/admin`, req.url)
          );
        case "student":
          return NextResponse.redirect(
            new URL(`/${currentLocale}/student`, req.url)
          );
        case "teacher":
          return NextResponse.redirect(
            new URL(`/${currentLocale}/teacher`, req.url)
          );
        default:
          return NextResponse.redirect(
            new URL(`/${currentLocale}/login`, req.url)
          );
      }
    }

    const roleAccessMap: { [key: string]: string[] } = {
      admin: [`/${currentLocale}/admin`],
      student: [`/${currentLocale}/student`],
      teacher: [`/${currentLocale}/teacher`],
    };

    const hasAccess = userRole
      ? roleAccessMap[userRole]?.some((allowedPath) =>
          pathname.startsWith(allowedPath)
        )
      : false;

    if (!hasAccess && !isPublicPage) {
      console.log("Access denied: Redirecting to 404, from:", pathname);
      return NextResponse.redirect(new URL(`/${currentLocale}/404`, req.url));
    }

    return middleware(req, event, response);
  };
}
