"use client";

import { useAppStore } from "@/store";
import { HeaderProps } from "@/types/components";
import { Flex, Button, Dropdown, MenuProps, Avatar } from "antd";
import { LuLogOut, LuUser } from "react-icons/lu";
import { AlignLeft, AlignRight, Bell, Moon, SunMoon, User } from "lucide-react";
import { Desc, UserName } from "./style";
import { useTheme } from "@/services/antd";
import { LayoutHeader, SearchInput } from "../style";
import styled from "styled-components";
import { media } from "@/style";

export const Header = ({ collapsed, setCollapsed, isVisible }: HeaderProps) => {
  const { setIsDrawer } = useAppStore();
  const { isDarkMode, toggleTheme } = useTheme();

  const handleOpenDrawer = () => {
    setIsDrawer(true);
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <Flex align="center" justify="space-between">
          {<h1>Chiqish</h1>} <LuLogOut size={20} />
        </Flex>
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
          {<h1>nmadir</h1>} <LuLogOut size={20} />
        </Flex>
      ),
      key: "3",
      // onClick: handleLogOut,
    },
  ];

  return (
    <>
      <LayoutHeader isDarkMode={isDarkMode}>
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
            isDarkMode={isDarkMode}
          />
        </Flex>

        <Flex gap={20} align="center">
          <Bell color={isDarkMode ? "white" : "black"} />
          <Dropdown menu={{ items }}>
            <h1 style={{ color: isDarkMode ? "white" : "black" }}>Uz</h1>
          </Dropdown>

          <Button onClick={toggleTheme} type="text">
            {isDarkMode ? <SunMoon /> : <Moon />}
          </Button>

          <UserDropdown menu={{ items }}>
            <Flex align="center" gap="small">
              <Flex vertical>
                <UserName>Jamshidbek</UserName>
                <Desc>admin</Desc>
              </Flex>
              <Avatar
                src={""}
                icon={<LuUser size={20} />}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: isDarkMode ? "white" : "black",
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
  ${media.md`
    display: none !important;
  `}
`;
