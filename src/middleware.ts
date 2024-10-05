import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./config/i18n";

export default createMiddleware({
  defaultLocale: "en",
  locales,
  localePrefix,
});

export const config = {
  matcher: ["/", "/(ru|en|uz)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
