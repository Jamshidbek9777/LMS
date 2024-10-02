"use client";

import Link from "next/link";
import { MenuProps } from "antd";
import { menuItems } from "./constants";
import { AntMenu, LayoutSider } from "../style";
import { Box } from "@/components";
import { HeaderProps } from "@/types/components";
import { useAppStore } from "@/store";
import { useState } from "react";

const menuItemsTyped: MenuProps["items"] = menuItems.map(
  ({ id, key, icon, name }) => ({
    key: id.toString(),
    icon,
    label: <Link href={`${key}`}>{name}</Link>,
  })
);
export const Sider = ({ collapsed, isVisible }: HeaderProps) => {
  const [current, setCurrent] = useState("1");
  const { setIsDrawer } = useAppStore();

  const handleClick: MenuProps["onClick"] = (e) => {
    if (!isVisible) setIsDrawer(false);
    setCurrent(e.key);
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
        selectedKeys={[current]}
        theme="light"
        items={menuItemsTyped}
        onClick={handleClick}
      />
    </LayoutSider>
  );
};
