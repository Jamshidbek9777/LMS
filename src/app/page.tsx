import Header from "@/components/header/header";
import { Menu } from "antd";
import type { MenuProps } from "antd";

const menuItems: MenuProps["items"] = [
  { label: "Dashboard", key: "dashboard" },
  { label: "Subjects", key: "subjects" },
  { label: "Table", key: "table" },
  { label: "Retake", key: "retake" },
  { label: "Finals", key: "finals" },
  { label: "About", key: "about" },
  { label: "Services", key: "services" },
];
export default function RootPage() {
  return (
    <>
      {/* <Header /> */}
      <div style={{ display: "flex" }}>
        <Menu items={menuItems}></Menu>
      </div>
    </>
  );
}
