"use client";

import Link from "next/link";
import { Layout, Menu, MenuProps } from "antd";
import { menuItems } from "./constants";
// import { AntMenu, } from "../style";
import { Box } from "@/components";
import { HeaderProps } from "@/types/components";
import { useAppStore } from "@/store";
import { useState } from "react";
import { useTheme } from "@/services/antd";
import styled from "styled-components";

const menuItemsTyped: MenuProps["items"] = menuItems.map(
  ({ id, key, icon, name }) => ({
    key: id.toString(),
    icon,
    label: <Link href={key}>{name}</Link>,
  })
);

export const Sider = ({ collapsed, isVisible }: HeaderProps) => {
  const { isDarkMode } = useTheme(); // Access dark mode state from theme context
  const [current, setCurrent] = useState("0");
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
      isDarkMode={isDarkMode}
      className={isVisible ? "sider-desktop" : ""}
    >
      {isVisible && (
        <Box
          $justify="center"
          $mb="var(--2xl)"
          $mt="var(--ss)"
          $width="100%"
          style={{ color: isDarkMode ? "white" : "black" }} // Dynamic color based on theme
        >
          <h2>Logo</h2>
        </Box>
      )}

      <Menu
        style={{ height: "93.3vh" }}
        mode="inline"
        selectedKeys={[current]}
        theme={isDarkMode ? "dark" : "light"}
        items={menuItemsTyped}
        onClick={handleClick}
      />
    </LayoutSider>
  );
};
export const LayoutSider = styled(Layout.Sider)<{ isDarkMode: boolean }>`
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? "#333" : "#ffffff"} !important;
  color: ${({ isDarkMode }) => (isDarkMode ? "#ffffff" : "#000000")};
`;
