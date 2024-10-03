import styled from "styled-components";

export const UserName = styled.h5<{ isdarkmode: boolean }>`
  color: ${({ isdarkmode }) => (isdarkmode ? "#fff" : "#000 !important")};

  font-size: var(--base);
  line-height: 120%;
`;

export const Desc = styled.p<{ isdarkmode: boolean }>`
  color: ${({ isdarkmode }) => (isdarkmode ? "#000" : "#94a3b8 !important")};

  font-size: 10px;
  line-height: 120%;
`;
