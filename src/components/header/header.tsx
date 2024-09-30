"use client";

import { useRouter } from "next/navigation";
import { Container } from "@/components";
import { InfoButton, Wrapper } from "./style";
import { AlignJustify } from "lucide-react";
import { Flex, Input } from "antd";
import styled from "styled-components";

export const Header = () => {
  const router = useRouter();
  const { Search } = Input;
  return (
    <>
      {/* <Container> */}
      <Wrapper>
        <Flex justify="center" align="center" gap={20}>
          <AlignJustify />
          <Input
            placeholder="Search"
            variant="filled"
            size="large"
            style={{
              width: "350px",
            }}
          />
        </Flex>
      </Wrapper>
      {/* </Container> */}
    </>
  );
};

export default Header;

// export const SearchInput = styled(Input.Search)`
/* height: 30px !important; */
/* padding: 0 !important; */
// `;
