import { PropsWithChildren } from "react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "meta.groups" });

  return {
    title: t("0"),
    // description: t("1"),
  };
}

export default function Layout({ children }: PropsWithChildren) {
  return children;
}
