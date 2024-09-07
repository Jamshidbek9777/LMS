import { PropsWithChildren } from "react";
import { Layout as AntdLayout, Drawer } from "antd";
import { Sider } from "./_components/sider/sider";
export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <>
      <AntdLayout hasSider>
        <Sider />
      </AntdLayout>
    </>
  );
}
