"use client";

import styled from "styled-components";
import { Container } from "../container/container";
import { Button } from "antd";

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Logo</h1>
        <Button type="primary">About me</Button>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
`;
