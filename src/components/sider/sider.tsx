"use client";

import { startTransition, useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useAppStore } from "@/store";
import { useTheme } from "@/providers";
import { locales } from "@/config";
import { usePathname, useRouter } from "@/navigation";
import { HeaderProps } from "@/types/components";
import { ROUTES, Box } from "@/components";
import styled from "styled-components";
import { Flex, Input, Menu, MenuProps, Select, Switch } from "antd";
import { LayoutSider } from "../style";
import { media } from "@/style";
import {
  ChevronDown,
  CircleGauge,
  ClipboardCheck,
  LayoutList,
  Newspaper,
  Presentation,
  Settings,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

export const Sider = ({ collapsed, isVisible }: HeaderProps) => {
  //lang
  const t = useTranslations("sidebar");

  //sidebar items
  const menuItems: any = [
    {
      id: 0,
      key: ROUTES.home,
      label: `${t("labels.0")}`,
      icon: <CircleGauge size={18} />,
    },
    {
      id: 2,
      key: ROUTES.applications,
      label: `${t("labels.1")}`,
      icon: <ClipboardCheck size={18} />,
    },
    {
      id: 3,
      key: ROUTES.groups,
      label: `${t("labels.2")}`,
      icon: <UsersRound size={18} />,
    },
    {
      id: 4,
      key: ROUTES.courses,
      label: `${t("labels.3")}`,
      icon: <LayoutList size={18} />,
    },
    {
      id: 5,
      key: ROUTES.news,
      label: `${t("labels.4")}`,
      icon: <Newspaper size={18} />,
    },
    {
      type: "divider",
    },
    {
      label: `${t("labels.6")}`,
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
  ];

  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const { setIsDrawer } = useAppStore();

  const { isdarkmode, toggleTheme } = useTheme();

  const [current, setCurrent] = useState<string>(() => {
    return localStorage.getItem("selectedMenuKey") || ROUTES.home;
  });

  const handleChange = (locale: any) => {
    startTransition(() => {
      router.replace(pathname, { locale });
    });
  };

  const localeNames: Record<string, string> = {
    uz: "O'zbek",
    ru: "Русский",
    en: "English",
  };

  const langOptions = locales.map((locale) => ({
    label: localeNames[locale],
    value: locale,
  }));

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
          $align="center"
          $width="100%"
          $height="62px"
          style={{
            color: isdarkmode ? "white" : "black",
          }}
        >
          {collapsed ? <h4>Logo</h4> : <h2>Logo</h2>}
        </Box>
      )}
      <Box $m="10px 5px">
        <SiderInput
          variant="filled"
          placeholder="Search"
          size="large"
          isdarkmode={isdarkmode}
        />
      </Box>
      <Menu
        style={{ height: "" }}
        mode="inline"
        selectedKeys={[current]}
        theme={isdarkmode ? "dark" : "light"}
        items={menuItems}
        onClick={handleClick}
        defaultOpenKeys={[`${t("labels.6")}`]}
      />
      <Flex vertical style={{ margin: "25px 27px" }}>
        <ThemeFlex
          justify={collapsed ? "center" : "space-between"}
          align="center"
        >
          {!collapsed && <p>{t("labels.7")}: </p>}
          <Switch checked={isdarkmode} onChange={toggleTheme} />
        </ThemeFlex>

        <LangFlex justify="space-between" align="center">
          {!collapsed && <p>{t("labels.8")} :</p>}
          <Select
            suffixIcon={
              <ChevronDown style={{ color: isdarkmode ? "white" : "black" }} />
            }
            defaultValue={locale}
            options={langOptions}
            onChange={handleChange}
          />
        </LangFlex>
      </Flex>
    </LayoutSider>
  );
};

export const ThemeFlex = styled(Flex)`
  ${media.lg`
    display: none !important;
  `}
`;

export const LangFlex = styled(Flex)`
  display: none;

  ${media.md`
    display: flex !important;
  `}
`;

export const SiderInput = styled(Input.Search)<{ isdarkmode: boolean }>`
  display: none;
  border: ${({ isdarkmode }) =>
    isdarkmode ? "1px solid #555" : "transparent"} !important;
  color: ${({ isdarkmode }) => (isdarkmode ? "#fff" : "#000")} !important;
  ${media.md`
    display: flex !important;
  `}
`;
