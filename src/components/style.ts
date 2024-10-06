import { media } from "@/style";
import { Input, Layout } from "antd";
import styled from "styled-components";

export const LayoutHeader = styled.header<{ isdarkmode: boolean }>`
  align-items: center;
  background-color: ${({ isdarkmode }) => (isdarkmode ? "#333" : "#fff")};
  color: ${({ isdarkmode }) => (isdarkmode ? "#fff" : "#000 !important")};
  display: flex;
  height: 64px;
  justify-content: space-between;
  padding: 0 10px;
  user-select: none;
  border-bottom: ${({ isdarkmode }) =>
    isdarkmode ? " 1px solid #333" : " 1px solid #e2e8f0"} !important;
`;

export const SearchInput = styled(Input)<{ isdarkmode: boolean }>`
  border-radius: 19px;
  border: ${({ isdarkmode }) =>
    isdarkmode ? "1px solid #555" : "1px solid #D5D5D5"} !important;
  color: ${({ isdarkmode }) => (isdarkmode ? "#fff" : "#000")} !important;
  width: 320px !important;

  ${media.md`
    display: none !important;
  `}
`;

export const LayoutSider = styled(Layout.Sider)<{ isdarkmode: boolean }>`
  background-color: ${({ isdarkmode }) =>
    isdarkmode ? "#333" : "#ffffff"} !important;
  color: ${({ isdarkmode }) => (isdarkmode ? "#ffffff" : "#000000")};
  user-select: none;
  /* height: 60vh; */
`;

export const LayoutContent = styled(Layout.Content)<{
  isdarkmode: boolean;
  isloginpage: boolean;
}>`
  color: ${({ isdarkmode }) => (isdarkmode ? "#fff" : "#000")} !important;
  height: ${({ isloginpage }) => (isloginpage ? "100vh" : "93.3vh")};
  overflow-y: auto;
  padding: ${({ isloginpage }) => (isloginpage ? "0" : "var(--base)")};
`;
