import { Layout } from "antd";
import styled from "styled-components";

export const LayoutSider = styled(Layout.Sider)`
  background: #fff !important;
  color: var(--white);
  line-height: 120px;
`;

export const LayoutContent = styled(Layout.Content)`
  padding: var(--base);
  overflow-y: auto;
`;
