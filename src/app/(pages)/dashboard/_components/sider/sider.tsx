import { GetProp, Menu, MenuProps } from "antd";
type MenuItem = GetProp<MenuProps, "items">[number];
const menuItems: MenuItem[] = [{ label: "Dashboard" }];
export const Sider = () => {
  return <Menu items={menuItems}>hello</Menu>;
};
