"use client";

import { useRouter } from "next/navigation";
import { Container } from "@/components";
import { InfoButton, Wrapper } from "./style";

export const Header = () => {
  const router = useRouter();

  return (
    <>
      <Container>
        <Wrapper>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Learn
          </p>

          <InfoButton type="primary">About me</InfoButton>
        </Wrapper>
      </Container>
    </>
  );
};

export default Header;
