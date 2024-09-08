import { Button } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background-color: grey;
  border-radius: 10px;
`;

export const InfoButton = styled(Button)`
  height: 40px;
`;
