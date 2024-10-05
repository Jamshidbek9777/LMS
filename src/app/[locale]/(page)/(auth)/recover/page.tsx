"use client";
import { Container } from "@/components";
import type { FormProps } from "antd";
import { Flex, Form } from "antd";
import { useLayoutEffect } from "react";
import {
  StyledForm,
  SubmitButton,
  Wrapper,
  AntdInput,
  LoginTitle,
  Label,
  CancelButton,
} from "../style";
import { useRouter } from "next/navigation";

type FieldType = {
  email?: string;
  password?: string;
};

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

const Recover = () => {
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
          <LoginTitle>Qayta tiklash</LoginTitle>
          <StyledForm
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item<FieldType>
              label={<Label>Email</Label>}
              name="email"
              rules={[{ required: true, message: "Iltimos email kiriting!" }]}
            >
              <AntdInput placeholder="Email kiriting" />
            </Form.Item>

            <Form.Item>
              <SubmitButton block htmlType="submit">
                Kod yuborish
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

export default Recover;
