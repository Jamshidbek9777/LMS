import { media } from "@/style";
import { Input, Layout, Menu } from "antd";
import styled from "styled-components";

export const LayoutHeader = styled.header<{ isdarkmode: boolean }>`
  background-color: ${({ isdarkmode }) => (isdarkmode ? "#333" : "#fff")};
  color: ${({ isdarkmode }) => (isdarkmode ? "#fff" : "#000 !important")};
  padding: 0 10px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchInput = styled(Input)<{ isdarkmode: boolean }>`
  width: 320px !important;
  background-color: ${({ isdarkmode }) =>
    isdarkmode ? "#222" : "#fff"} !important;
  color: ${({ isdarkmode }) => (isdarkmode ? "#fff" : "#000")} !important;
  border: ${({ isdarkmode }) =>
    isdarkmode ? "1px solid #555" : "1px solid #ccc"} !important;

  ${media.md`
    display: none !important;
  `}
`;

export const LayoutSider = styled(Layout.Sider)<{ isdarkmode: boolean }>`
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
