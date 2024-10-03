"use client";

// import Link from "next/link";
import { Layout, Menu, MenuProps } from "antd";
// import { menuItems } from "./constants";
// import { AntMenu, } from "../style";
import { Box } from "@/components";
import { HeaderProps } from "@/types/components";
import { useAppStore } from "@/store";
import { useState } from "react";
import { useTheme } from "@/services/antd";
import styled from "styled-components";

import { ROUTES } from "@/components";

import { LuHome } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { CiViewTable } from "react-icons/ci";
import { GrPlan } from "react-icons/gr";
import { FaRegQuestionCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import {
  CircleGauge,
  ClipboardCheck,
  LayoutList,
  Newspaper,
  Presentation,
  Settings,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

// const menuItemsTyped: MenuProps["items"] = menuItems.map(
//   ({ id, key, icon, name }) => ({
//     key: id.toString(),
//     icon,
//     label: <Link href={key}>{name}</Link>,
//   })
// );

export const Sider = ({ collapsed, isVisible }: HeaderProps) => {
  const menuItems: any = [
    {
      id: 0,
      key: ROUTES.home,
      label: "Dashboard",
      icon: <CircleGauge size={18} />,
    },
    {
      id: 2,
      key: ROUTES.arizalar,
      label: "Arizalar",
      icon: <ClipboardCheck size={18} />,
    },
    {
      id: 3,
      key: ROUTES.groups,
      label: "Guruhlar",
      icon: <UsersRound size={18} />,
    },
    {
      id: 4,
      key: ROUTES.courses,
      label: "Kurslar",
      icon: <LayoutList size={18} />,
    },
    {
      id: 5,
      key: ROUTES.news,
      label: "Yangiliklar",
      icon: <Newspaper size={18} />,
    },
    {
      type: "divider",
    },
    {
      label: "Sozlamalar",
      icon: <Settings size={18} />,
      children: [
        {
          // id: 1,
          key: ROUTES.groups,
          label: "Admin",
          icon: <ShieldCheck size={18} />,
        },
        {
          // id: 1,
          key: ROUTES.groups,
          label: "O'qituvchi",
          icon: <Presentation size={18} />,
        },
        {
          // id: 1,
          key: ROUTES.groups,
          label: "Admin",
          icon: <ShieldCheck size={18} />,
        },
        {
          // id: 1,
          key: ROUTES.groups,
          label: "Admin",
          icon: <ShieldCheck size={18} />,
        },
      ],
    },
  ];

  const { isDarkMode } = useTheme();
  const [current, setCurrent] = useState("0");
  const { setIsDrawer } = useAppStore();
  const router = useRouter();

  const handleClick: MenuProps["onClick"] = (e) => {
    if (!isVisible) setIsDrawer(false);
    setCurrent(e.key);

    const selectedItem = menuItems.find((item: any) => item.key === e.key);
    if (selectedItem) {
      router.push(selectedItem.key);
    }
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
          style={{ color: isDarkMode ? "white" : "black" }}
        >
          <h2>Logo</h2>
        </Box>
      )}

      <Menu
        style={{ height: "93.3vh" }}
        mode="inline"
        selectedKeys={[current]}
        theme={isDarkMode ? "dark" : "light"}
        items={menuItems}
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
