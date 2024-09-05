"use client";

import styled from "styled-components";

export const Header = () => {
  return (
    <Wrapper>
      <h1>Logo</h1>
      <h1>Login</h1>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
`;
