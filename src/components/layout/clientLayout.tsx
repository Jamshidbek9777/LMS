"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useAppStore } from "@/store";
import { Header } from "@/components";
import { Sider } from "@/components";
import { Content } from "@/components";
import { Layout as AntdLayout, Drawer } from "antd";
import { AntdProvider, StyledComponentsRegistry } from "@/services";

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const { isDrawer, setIsDrawer } = useAppStore();

  const handleCloseDrawer = () => {
    setIsDrawer(false);
  };

  const isloginpage =
    pathname.endsWith("/login") ||
    pathname.endsWith("/register") ||
    pathname.endsWith("/recover") ||
    pathname.endsWith("/otp");

  return isloginpage ? (
    <StyledComponentsRegistry>
      <AntdProvider>
        <Content>{children}</Content>
      </AntdProvider>
    </StyledComponentsRegistry>
  ) : (
    <StyledComponentsRegistry>
      <AntdProvider>
        <AntdLayout hasSider>
          <Sider collapsed={collapsed} isVisible isdarkmode />
          <AntdLayout>
            <Header
              isdarkmode
              collapsed={collapsed}
              setCollapsed={setCollapsed}
              isVisible
            />
            <Content>{children}</Content>
          </AntdLayout>
        </AntdLayout>
        <Drawer
          title={<h1>Logo</h1>}
          placement="left"
          width={241}
          open={isDrawer}
          onClose={handleCloseDrawer}
          styles={{ body: { padding: 0 } }}
        >
          <Sider isdarkmode />
        </Drawer>
      </AntdProvider>
    </StyledComponentsRegistry>
  );
};
