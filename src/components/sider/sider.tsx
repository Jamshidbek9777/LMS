"use client";

import Link from "next/link";

import { MenuProps } from "antd";
import { menuItems } from "./menuItems";
import { AntMenu, LayoutSider } from "../style";

const menuItemsTyped: MenuProps["items"] = menuItems.map(
  ({ id, key, icon, name }) => ({
    key: id.toString(),
    icon,
    label: <Link href={`${key}`}>{name}</Link>,
  })
);

export const Sider = () => {
  return (
    <LayoutSider width={250}>
      <AntMenu mode="inline" theme="light" items={menuItemsTyped}></AntMenu>
    </LayoutSider>
  );
};
