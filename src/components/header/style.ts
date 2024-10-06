import { media } from "@/style";
import { Select } from "antd";
import styled from "styled-components";

export const UserName = styled.h5<{ isdarkmode: boolean }>`
  color: ${({ isdarkmode }) => (isdarkmode ? "#fff" : "#000 !important")};
  font-size: var(--base);
  line-height: 120%;
`;

export const Desc = styled.p<{ isdarkmode: boolean }>`
  color: ${({ isdarkmode }) => (isdarkmode ? "#fff" : "#000 !important")};
  font-size: 10px;
  line-height: 120%;
`;

export const HeaderSelect = styled(Select)`
  ${media.md`
    display: none !important;
  `}
`;

export const ThemeFlex = styled.div`
  display: none;

  ${media.lg`
    display: block !important;
  `}
`;
