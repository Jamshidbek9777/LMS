import { getTranslations } from "next-intl/server";
import { PropsWithChildren } from "react";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "meta.home" });

  return {
    title: t("0"),
    description: t("1"),
  };
}

export default function RootLayout({ children }: PropsWithChildren) {
  return children;
}
