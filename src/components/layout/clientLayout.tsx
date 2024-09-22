"use client";

import { usePathname } from "next/navigation";

import { Header } from "@/components";
import { Sider } from "@/components";
import { Content } from "@/components";
import { Layout as AntdLayout } from "antd";
import { StyledComponentsRegistry } from "@/services";

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const isLoginPage = pathname === "/login";

  return isLoginPage ? (
    <Content>{children}</Content>
  ) : (
    <StyledComponentsRegistry>
      <Header />
      <AntdLayout hasSider>
        <Sider />
        <AntdLayout>
          <Content>{children}</Content>
        </AntdLayout>
      </AntdLayout>
    </StyledComponentsRegistry>
  );
};
