"use client";

import { useAppStore } from "@/store";
import { HeaderProps } from "@/types/components";
import { Flex, Input, Button, Dropdown, MenuProps, Avatar, Switch } from "antd";
import { LuLogOut, LuUser } from "react-icons/lu";
import { AlignLeft, AlignRight, Bell, Moon, SunMoon, User } from "lucide-react";
import styled from "styled-components";
import { media } from "@/style";
import { Desc, UserName } from "./style";
import { useTheme } from "@/services/antd";

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
            style={{
              color: isDarkMode ? "white" : "black",
            }}
          />
          <Button
            className={isVisible ? "header-drawer" : ""}
            type="text"
            icon={collapsed ? <AlignRight /> : <AlignLeft />}
            onClick={handleOpenDrawer}
            style={{
              color: isDarkMode ? "white" : "black",
            }}
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
            {isDarkMode ? <Moon /> : <SunMoon />}
          </Button>

          <Dropdown menu={{ items }}>
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
          </Dropdown>
        </Flex>
      </LayoutHeader>
    </>
  );
};

// Example of the styled component with dark mode support
export const LayoutHeader = styled.header<{ isDarkMode: boolean }>`
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#333" : "#fff")};
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000 !important")};
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchInput = styled(Input)<{ isDarkMode: boolean }>`
  width: 320px !important;
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? "#222" : "#fff"} !important;
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")} !important;
  border: ${({ isDarkMode }) =>
    isDarkMode ? "1px solid #555" : "1px solid #ccc"} !important;

  ${media.md`
    display: none !important;
  `}
`;
