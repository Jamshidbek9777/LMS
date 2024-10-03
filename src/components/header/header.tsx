"use client";

import { useAppStore } from "@/store";
import { HeaderProps } from "@/types/components";
import { useTheme } from "@/services/antd";
import { Flex, Button, Dropdown, MenuProps, Avatar } from "antd";
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

export const Header = ({ collapsed, setCollapsed, isVisible }: HeaderProps) => {
  const { setIsDrawer } = useAppStore();
  const { isdarkmode, toggleTheme } = useTheme();

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
          <Bell color={isdarkmode ? "white" : "black"} />
          <Button type="text" style={{ fontSize: "16px" }}>
            <UserDropdown menu={{ items }}>
              <h1 style={{ color: isdarkmode ? "white" : "black" }}>
                Uz <ChevronDown size={14} />
              </h1>
            </UserDropdown>
          </Button>

          <Button onClick={toggleTheme} type="text">
            {isdarkmode ? <SunMoon /> : <Moon />}
          </Button>

          <UserDropdown menu={{ items }}>
            <Flex align="center" gap="small">
              <Flex vertical>
                <UserName isdarkmode={isdarkmode}>Jamshidbek</UserName>
                <Desc isdarkmode={isdarkmode}>admin</Desc>
              </Flex>
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
    display: none !important;
  `}
`;
