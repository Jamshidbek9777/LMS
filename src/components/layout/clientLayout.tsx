"use client";

import { usePathname } from "next/navigation";

import { Header } from "@/components";
import { Sider } from "@/components";
import { Content } from "@/components";
import { Layout as AntdLayout } from "antd";
import { AntdProvider, StyledComponentsRegistry } from "@/services";

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const isLoginPage =
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/recover" ||
    pathname === "/otp";

  return isLoginPage ? (
    <StyledComponentsRegistry>
      <AntdProvider>
        <Content>{children}</Content>
      </AntdProvider>
    </StyledComponentsRegistry>
  ) : (
    <StyledComponentsRegistry>
      <AntdProvider>
        <AntdLayout hasSider>
          <Sider />
          <AntdLayout>
            <Header />
            <Content>{children}</Content>
          </AntdLayout>
        </AntdLayout>
      </AntdProvider>
    </StyledComponentsRegistry>
  );
};
