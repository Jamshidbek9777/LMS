import { media } from "@/style";
import { Layout, Menu } from "antd";
import styled from "styled-components";

export const LayoutHeader = styled(Layout.Header)`
  /* align-items: center; */
  /* align-content: center; */
  padding: 10px !important;
  display: flex;
  justify-content: space-between;
  /* 
  ${media.md`
    height: 78vh;
  `} */
`;
export const LayoutSider = styled(Layout.Sider)`
  background: #fff !important;
  /* color: var(--white); */
`;

export const LayoutContent = styled(Layout.Content)<{ isloginpage: boolean }>`
  height: ${({ isloginpage }) => (isloginpage ? "100vh" : "93vh")};
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
