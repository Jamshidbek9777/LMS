import { Layout, Menu } from "antd";
import styled from "styled-components";

export const LayoutSider = styled(Layout.Sider)`
  /* background: #fff !important; */
  /* color: var(--white); */
  /* border-right: 1px solid #e2e8f0; */
  /* position: fixed; */
  /* overflow: auto; */
  /* height: 100%; */
  /* left: 0; */
  /* top: 0; */
  /* bottom: 0; */
  /* border-radius: 10px; */
  /* margin-top: 20px; */
  /* margin-left: 20px; */
`;

export const LayoutContent = styled(Layout.Content)`
  /* margin-left: 10px; */
  /* padding: var(--base); */
  /* overflow-y: auto; */
  /* height: calc(100vh - 80px); */
  /* margin-top: 10px; */
`;

export const AntMenu = styled(Menu)`
  margin-top: 10px;
  padding: 20;
  border: none !important;
`;
