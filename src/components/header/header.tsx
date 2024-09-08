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
            TATU LMS <img src="/images/TATU_logotip.png" width={70} alt="" />{" "}
          </p>

          <InfoButton type="primary">About me</InfoButton>
        </Wrapper>
      </Container>
    </>
  );
};

export default Header;
