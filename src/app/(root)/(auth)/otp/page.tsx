"use client";

import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";
import { Container } from "@/components";
import { Flex, Form, Input } from "antd";
import styled from "styled-components";
import {
  StyledForm,
  SubmitButton,
  Wrapper,
  LoginTitle,
  Label,
  CancelButton,
} from "../style";
type FieldType = {
  otp?: number;
};
import type { FormProps } from "antd";

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const setVh = () => {
  const vh = window.innerHeight * 0.01;
  requestAnimationFrame(() => {
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
};

const Otp = () => {
  useLayoutEffect(() => {
    setVh();

    window.addEventListener("resize", setVh);
    window.addEventListener("orientationchange", setVh);
    return () => {
      window.removeEventListener("resize", setVh);
      window.removeEventListener("orientationchange", setVh);
    };
  }, []);

  const router = useRouter();
  return (
    <Wrapper>
      <Container style={{ width: "100%", margin: "0 20px" }}>
        <Flex vertical align="center">
          <LoginTitle>Tasdiqlash</LoginTitle>
          <StyledForm
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item<FieldType>
              label={<Label>Emailingizga yuborilgan kodni kiriting</Label>}
              name="otp"
              rules={[{ required: true, message: "Iltimos kodni kiriting!" }]}
            >
              <InputOtp
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "20px",
                }}
                length={5}
              />
            </Form.Item>

            <Form.Item>
              <SubmitButton block htmlType="submit">
                Tasdiqlash
              </SubmitButton>
            </Form.Item>

            <CancelButton onClick={() => router.back()} block>
              Cancel
            </CancelButton>
          </StyledForm>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default Otp;

export const InputOtp = styled(Input.OTP)`
  display: flex;
  height: 10px !important;
`;
