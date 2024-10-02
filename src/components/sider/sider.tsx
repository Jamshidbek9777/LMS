"use client";

import Link from "next/link";
import { MenuProps } from "antd";
import { menuItems } from "./constants";
import { AntMenu, LayoutSider } from "../style";
import { Box } from "@/components";
import { useMenuItem } from "../utils";
import { HeaderProps } from "@/types/components";
import { useAppStore } from "@/store";

const menuItemsTyped: MenuProps["items"] = menuItems.map(
  ({ id, key, icon, name }) => ({
    key: id.toString(),
    icon,
    label: <Link href={`${key}`}>{name}</Link>,
  })
);

export const Sider = ({ collapsed, isVisible }: HeaderProps) => {
  const { setIsDrawer } = useAppStore();
  const { selectedMenu } = useMenuItem();

  const handleClick: MenuProps["onClick"] = () => {
    if (!isVisible) setIsDrawer(false);
  };

  return (
    <LayoutSider
      width={240}
      collapsible
      collapsed={collapsed}
      trigger={null}
      className={isVisible ? "sider-desktop" : ""}
    >
      {isVisible && (
        <Box
          // as={Icons.Logo}
          $justify="center"
          $mb="var(--2xl)"
          $mt="var(--ss)"
          $width="100%"
          style={{ color: "black" }}
        >
          <h2>Logo</h2>
        </Box>
      )}

      <AntMenu
        mode="inline"
        selectedKeys={[selectedMenu.key]}
        openKeys={[selectedMenu.key]}
        theme="dark"
        items={menuItemsTyped}
        onClick={handleClick}
      />
    </LayoutSider>
  );
};
