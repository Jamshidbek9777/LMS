"use client";

import Link from "next/link";

import { Menu, MenuProps } from "antd";
import { menuItems } from "./menuItems";
import { LayoutSider } from "../style";

const menuItemsTyped: MenuProps["items"] = menuItems.map(
  ({ id, key, icon, name }) => ({
    key: id.toString(),
    icon,
    label: <Link href={`${key}`}>{name}</Link>,
  })
);

export const Sider = () => {
  return (
    <LayoutSider>
      <Menu items={menuItemsTyped}></Menu>
    </LayoutSider>
  );
};
