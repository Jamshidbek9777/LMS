"use client";
import { Container } from "@/components";
import type { FormProps } from "antd";
import { Flex, Form } from "antd";
import { useLayoutEffect } from "react";
import {
  AntdInputPassword,
  StyledForm,
  SubmitButton,
  Wrapper,
  AntdInput,
  Helper,
  LoginTitle,
  Label,
} from "../style";
import Link from "next/link";

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

const Login = () => {
  useLayoutEffect(() => {
    setVh();

    window.addEventListener("resize", setVh);
    window.addEventListener("orientationchange", setVh);
    return () => {
      window.removeEventListener("resize", setVh);
      window.removeEventListener("orientationchange", setVh);
    };
  }, []);

  return (
    <Wrapper>
      <Container style={{ width: "100%", margin: "0 20px" }}>
        <Flex vertical align="center">
          <LoginTitle>Kirish</LoginTitle>
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

            <Form.Item<FieldType>
              label={<Label>Parol</Label>}
              name="password"
              rules={[{ required: true, message: "Iltimos parol kiriting!" }]}
            >
              <AntdInputPassword placeholder="Parol kiriting" />
            </Form.Item>
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Link
                href={"/recover"}
                style={{
                  color: "#fff",
                  borderBottom: "1px solid white",
                }}
              >
                Parolni unutdingizmi?
              </Link>
            </div>

            <Form.Item>
              <SubmitButton block htmlType="submit">
                Davom etish
              </SubmitButton>
            </Form.Item>
          </StyledForm>
          <Helper>
            Hisobingiz yo&#39;qmi ?{" "}
            <Link
              style={{ color: "#fff", borderBottom: "1px solid white" }}
              href={"/register"}
            >
              Ro&#39;yxatdan o&#39;tish
            </Link>
          </Helper>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default Login;
