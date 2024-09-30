"use client";

import Link from "next/link";

import { Flex, MenuProps } from "antd";
import { menuItems } from "./constants";
import { AntMenu, LayoutSider } from "../style";
import { Box, Icons } from "@/components";
import React from "react";
import { useMenuItem } from "../utils";

const menuItemsTyped: MenuProps["items"] = menuItems.map(
  ({ id, key, icon, name }) => ({
    key: id.toString(),
    icon,
    label: <Link href={`${key}`}>{name}</Link>,
  })
);

export const Sider = () => {
  const { selectedMenu } = useMenuItem();
  return (
    <LayoutSider width={240}>
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

      <AntMenu
        mode="inline"
        selectedKeys={[selectedMenu.key]}
        openKeys={[selectedMenu.key]}
        theme="dark"
        items={menuItemsTyped}
      ></AntMenu>
    </LayoutSider>
  );
};
