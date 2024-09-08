"use client";

import { usePathname } from "next/navigation";

import { Header } from "@/components";
import { Sider } from "@/components";
import { Content } from "@/components";
import { Layout as AntdLayout } from "antd";

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const isLoginPage = pathname === "/login";

  return isLoginPage ? (
    <Content>{children}</Content>
  ) : (
    <>
      <Header />
      <AntdLayout hasSider>
        <Sider />
        <AntdLayout>
          <Content>{children}</Content>
        </AntdLayout>
      </AntdLayout>
    </>
  );
};
