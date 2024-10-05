"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/store";
import { useTheme } from "@/providers/antd";
import { HeaderProps } from "@/types/components";
import { ROUTES, Box } from "@/components";
import { Flex, Menu, MenuProps, Switch } from "antd";
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
import { LayoutSider } from "../style";

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
      key: ROUTES.applications,
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
          id: 1,
          key: ROUTES.adminSettings,
          label: "Admin",
          icon: <ShieldCheck size={18} />,
        },
        {
          id: 2,
          key: ROUTES.teacherSettings,
          label: "O'qituvchi",
          icon: <Presentation size={18} />,
        },
        {
          id: 3,
          key: ROUTES.subjects,
          label: "Admin",
          icon: <ShieldCheck size={18} />,
        },
      ],
    },
    {
      type: "divider",
    },
    // {
    //   id: 5,
    //   key: ROUTES.news,
    //   label: "Yangiliklar",
    //   icon: <Newspaper size={18} />,
    // },
  ];

  const { isdarkmode, toggleTheme } = useTheme();
  const [current, setCurrent] = useState<string>(() => {
    return localStorage.getItem("selectedMenuKey") || ROUTES.home;
  });

  const { setIsDrawer } = useAppStore();
  const router = useRouter();

  const handleClick: MenuProps["onClick"] = (e) => {
    if (!isVisible) setIsDrawer(false);
    setCurrent(e.key);
    localStorage.setItem("selectedMenuKey", e.key);
    const findMenuItem = (items: any[], key: string): any => {
      for (const item of items) {
        if (item.key === key) return item;
        if (item.children) {
          const found = findMenuItem(item.children, key);
          if (found) return found;
        }
      }
      return null;
    };

    const selectedItem = findMenuItem(menuItems, e.key);
    if (selectedItem) {
      router.push(selectedItem.key);
    }
  };

  useEffect(() => {
    if (isdarkmode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isdarkmode]);

  return (
    <LayoutSider
      width={240}
      collapsible
      collapsed={collapsed}
      trigger={null}
      isdarkmode={isdarkmode}
      className={isVisible ? "sider-desktop" : ""}
    >
      {isVisible && (
        <Box
          $justify="center"
          $mb="var(--2xl)"
          $mt="var(--ss)"
          $width="100%"
          style={{ color: isdarkmode ? "white" : "black" }}
        >
          <h2>Logo</h2>
        </Box>
      )}

      <Menu
        style={{ height: "" }}
        mode="inline"
        selectedKeys={[current]}
        theme={isdarkmode ? "dark" : "light"}
        items={menuItems}
        onClick={handleClick}
        defaultOpenKeys={["Sozlamalar"]}
      />

      <Flex
        gap={80}
        justify="center"
        align="center"
        style={{ marginTop: "50px" }}
      >
        {!collapsed && <p>Theme</p>}
        <Switch checked={isdarkmode} onChange={toggleTheme} />
      </Flex>
    </LayoutSider>
  );
};
