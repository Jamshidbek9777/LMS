import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ClientLayout } from "@/components";
import { ReactNode } from "react";
import { NextIntlProvider } from "@/providers";

type LayoutProps = {
  params: { locale: string };
  children: ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learning Management System",
  description: "Developed by Jamshidbek",
};
export default function RootLayout({
  params: { locale },
  children,
}: LayoutProps) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlProvider locale={locale}>
          <AntdRegistry>
            <ClientLayout>{children}</ClientLayout>
          </AntdRegistry>
        </NextIntlProvider>
      </body>
    </html>
  );
}
