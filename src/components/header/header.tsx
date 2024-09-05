"use client";

import styled from "styled-components";
import { Container } from "../container/container";

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Logo</h1>
        <h1>Login</h1>
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
