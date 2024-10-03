import { media } from "@/style";
import { Input, Layout, Menu } from "antd";
import styled from "styled-components";

export const LayoutHeader = styled.header<{ isDarkMode: boolean }>`
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#333" : "#fff")};
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000 !important")};
  padding: 0 10px;
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

export const LayoutSider = styled(Layout.Sider)<{ isDarkMode: boolean }>`
  /* background: #fff !important; */

  /* color: var(--white); */
`;

export const LayoutContent = styled(Layout.Content)<{ isloginpage: boolean }>`
  height: ${({ isloginpage }) => (isloginpage ? "100vh" : "93.3vh")};
  padding: ${({ isloginpage }) => (isloginpage ? "0" : "var(--base)")};
  overflow-y: auto;

  ${media.md`
    /* height: 78vh; */
  `}
`;

export const AntMenu = styled(Menu)`
  margin-top: 10px;
  padding: 20px;
  border: none !important;
`;
