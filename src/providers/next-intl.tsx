import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages } from "@/lib";

type Props = {
  locale: string;
  children: ReactNode;
};

export const NextIntl = async ({ locale, children }: Props) => {
  const timeZone = "Europe/Vienna";

  let messages;
  try {
    messages = await getMessages(locale);
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider messages={messages} timeZone={timeZone}>
      {children}
    </NextIntlClientProvider>
  );
};
