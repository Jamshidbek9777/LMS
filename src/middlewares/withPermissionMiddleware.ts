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

    // Determine the locale (default to 'en' if not in path)
    const locale = pathname.split("/")[1];
    const supportedLocales = ["en", "uz", "ru"];
    const currentLocale = supportedLocales.includes(locale) ? locale : "en";

    // Handle if the user visits the root path (localhost:3000 or /)
    if (
      pathname === "/" ||
      pathname === "/en" ||
      pathname === "/uz" ||
      pathname === "/ru"
    ) {
      // Check if the user is authenticated
      if (accessToken) {
        // Redirect authenticated users to the appropriate page based on their role
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
        // If not authenticated, redirect to login page
        return NextResponse.redirect(
          new URL(`/${currentLocale}/login`, req.url)
        );
      }
    }

    // Public pages (login, register, or 404)
    const isAuthPage =
      pathname.includes("/login") || pathname.includes("/register");
    const isPublicPage = isAuthPage || pathname.includes("/404");

    // If not authenticated and trying to access a non-public page, redirect to login
    if (!accessToken && !isPublicPage) {
      const returnTo = encodeURIComponent(req.url); // Save the original destination
      console.log("Redirecting to login, from:", pathname);
      return NextResponse.redirect(
        new URL(`/${currentLocale}/login?returnTo=${returnTo}`, req.url)
      );
    }

    // If authenticated, prevent access to login or register pages
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

    // Role-based access control logic
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

    // Deny access to restricted areas if the user doesn't have the required role
    if (!hasAccess && !isPublicPage) {
      console.log("Access denied: Redirecting to 404, from:", pathname);
      return NextResponse.redirect(new URL(`/${currentLocale}/404`, req.url));
    }

    // Let the middleware chain continue for allowed requests
    return middleware(req, event, response);
  };
}
