"use client";

import { useLocale } from "next-intl";
import { locales } from "@/config/i18n";
import { useAppStore } from "@/store";
import { HeaderProps } from "@/types/components";
import { useTheme } from "@/providers/antd";
import { LuLogOut } from "react-icons/lu";
import { Desc, UserName } from "./style";
import { LayoutHeader, SearchInput } from "../style";
import styled from "styled-components";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/navigation";
import { Box } from "../box";
import { media } from "@/style";
import { Flex, Button, Dropdown, MenuProps, Avatar, Select, Badge } from "antd";
import {
  AlignLeft,
  AlignRight,
  Bell,
  ChevronDown,
  Moon,
  SunMoon,
  User,
  UserRound,
} from "lucide-react";

export const Header = ({ collapsed, setCollapsed, isVisible }: HeaderProps) => {
  const { setIsDrawer } = useAppStore();
  const { isdarkmode, toggleTheme } = useTheme();
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
    uz: "O'zbek",
    ru: "Русский",
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

        <Flex gap={10} align="center">
          <Box style={{ marginRight: "7px" }}>
            <Badge count={5}>
              <Bell color={isdarkmode ? "white" : "black"} />
            </Badge>
          </Box>
          <HeaderSelect
            variant="borderless"
            suffixIcon={
              <ChevronDown style={{ color: isdarkmode ? "white" : "black" }} />
            }
            loading={isPending}
            defaultValue={locale}
            options={langOptions}
            onChange={handleChange}
          />
          <ThemeFlex>
            <Button onClick={toggleTheme} type="text">
              {isdarkmode ? <SunMoon /> : <Moon />}
            </Button>
          </ThemeFlex>
          <UserDropdown menu={{ items }}>
            <Flex align="center" gap="small">
              <Avatar
                size={40}
                src={""}
                icon={<UserRound size={21} />}
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

export const HeaderSelect = styled(Select)`
  ${media.md`
    display: none !important;
  `}
`;

export const ThemeFlex = styled(Flex)`
  display: none;

  ${media.lg`
    display: block !important;
  `}
`;
