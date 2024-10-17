import createMiddleware from "next-intl/middleware";

export function withI18nMiddleware() {
  return createMiddleware({
    locales: ["en", "uz", "ru"],
    defaultLocale: "en",
  });
}
