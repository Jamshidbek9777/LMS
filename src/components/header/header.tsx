"use client";

import { useAppStore } from "@/store";
import { HeaderProps } from "@/types/components";
import { useTheme } from "@/providers/antd";
import { Flex, Button, Dropdown, MenuProps, Avatar, Select } from "antd";
import {
  AlignLeft,
  AlignRight,
  Bell,
  ChevronDown,
  Moon,
  SunMoon,
  User,
} from "lucide-react";
import { LuLogOut, LuUser } from "react-icons/lu";
import { Desc, UserName } from "./style";
import { LayoutHeader, SearchInput } from "../style";
import styled from "styled-components";
import { media } from "@/style";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/navigation";
import { locales } from "@/config/i18n";

export const Header = ({ collapsed, setCollapsed, isVisible }: HeaderProps) => {
  const { setIsDrawer } = useAppStore();
  const { isdarkmode } = useTheme();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const handleOpenDrawer = () => {
    setIsDrawer(true);
  };
  const handleChange = (locale: any) => {
    startTransition(() => {
      router.replace(pathname, { locale });
    });
  };
  const localeNames: Record<string, string> = {
    uz: "Uzbek",
    ru: "Russian",
    en: "English",
  };
  const langOptions = locales.map((locale) => ({
    label: localeNames[locale], // Use the full name from the mapping
    value: locale,
  }));

  const items: MenuProps["items"] = [
    {
      label: (
        <>
          <Flex vertical>
            <UserName isdarkmode={isdarkmode}>Jamshidbek</UserName>
            <Desc isdarkmode={isdarkmode}>admin</Desc>
          </Flex>
        </>
      ),
      key: "2",
      // onClick: handleLogOut,
    },
    {
      type: "divider",
    },
    {
      label: (
        <Flex align="center" justify="space-between">
          {<h1>Log out</h1>} <LuLogOut size={20} />
        </Flex>
      ),
      key: "3",
      // onClick: handleLogOut,
    },
  ];

  return (
    <>
      <LayoutHeader isdarkmode={isdarkmode}>
        <Flex align="center" gap={20}>
          <Button
            className={isVisible ? "sider-desktop" : ""}
            type="text"
            icon={collapsed ? <AlignRight /> : <AlignLeft />}
            onClick={() => setCollapsed?.(!collapsed)}
          />

          <Button
            className={isVisible ? "header-drawer" : ""}
            type="text"
            icon={collapsed ? <AlignRight /> : <AlignLeft />}
            onClick={handleOpenDrawer}
          />

          <SearchInput
            variant="filled"
            placeholder="Search"
            size="large"
            isdarkmode={isdarkmode}
          />
        </Flex>

        <Flex gap={5} align="center">
          <Button type="text">
            <Bell color={isdarkmode ? "white" : "black"} />
          </Button>
          {/* <Button type="text" style={{ fontSize: "16px" }}>
            <UserDropdown menu={{ items }}>
              <h1 style={{ color: isdarkmode ? "white" : "black" }}>
                Uz <ChevronDown size={14} />
              </h1>
            </UserDropdown>
          </Button> */}
          <Select
            variant="filled"
            suffixIcon={<ChevronDown />}
            loading={isPending}
            defaultValue={locale}
            options={langOptions}
            onChange={handleChange}
          />

          {/* <Button onClick={toggleTheme} type="text">
            {isdarkmode ? <SunMoon /> : <Moon />}
          </Button> */}

          <UserDropdown menu={{ items }}>
            <Flex align="center" gap="small">
              <Avatar
                src={""}
                icon={<LuUser size={20} />}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: isdarkmode ? "white" : "black",
                }}
              />
            </Flex>
          </UserDropdown>
        </Flex>
      </LayoutHeader>
    </>
  );
};

export const UserDropdown = styled(Dropdown)`
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.md`
    /* display: none !important; */
  `}
`;

export const UserFlex = styled(Flex)`
  ${media.md`
    display: none !important;
  `}
`;
export const UserFlexdrp = styled(Flex)`
  display: none;
  ${media.md`
    display: block !important;
  `}
`;
