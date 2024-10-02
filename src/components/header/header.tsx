"use client";

import { useAppStore } from "@/store";
import { HeaderProps } from "@/types/components";
import { Flex, Input, Button, Dropdown, MenuProps, Avatar } from "antd";
import { LayoutHeader } from "../style";
import { LuLogOut, LuUser } from "react-icons/lu";
import { AlignLeft, AlignRight, Bell, User } from "lucide-react";
import styled from "styled-components";
import { media } from "@/style";
import { Desc, UserName } from "./style";

export const Header = ({ collapsed, setCollapsed, isVisible }: HeaderProps) => {
  const { setIsDrawer } = useAppStore();

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
      <LayoutHeader>
        <Flex align="center" gap={20}>
          <Button
            className={isVisible ? "sider-desktop" : ""}
            type="text"
            icon={collapsed ? <AlignRight /> : <AlignLeft />}
            onClick={() => setCollapsed?.(!collapsed)}
            style={{
              color: "black",
            }}
          />

          <Button
            className={isVisible ? "header-drawer" : ""}
            type="text"
            icon={collapsed ? <AlignRight /> : <AlignLeft />}
            onClick={handleOpenDrawer}
            style={{
              color: "black",
            }}
          />

          <SearchInput variant="filled" placeholder="Search" size="large" />
        </Flex>
        <Flex gap={20} align="center">
          <Bell />
          <Dropdown menu={{ items }}>
            <h1>Uz</h1>
          </Dropdown>
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
                }}
              />
            </Flex>
          </Dropdown>
        </Flex>
      </LayoutHeader>
    </>
  );
};

export const SearchInput = styled(Input)`
  width: 320px !important;

  ${media.md`
    /* width: 100px !important; */
    display: none !important;
  `}
`;
