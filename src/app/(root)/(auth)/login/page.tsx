"use client";
import { Container } from "@/components";
import type { FormProps } from "antd";
import { Button, Flex, Form, Input } from "antd";
import { useLayoutEffect } from "react";
import styled from "styled-components";
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
              style={{
                textAlign: "center",
                width: "100%",
              }}
            >
              <AntdInputPassword placeholder="Parol kiriting" />
              <p style={{ marginTop: "10px", color: "#fff" }}>
                Parolni unutdingizmi?
              </p>
            </Form.Item>
            <Form.Item>
              <SubmitButton block htmlType="submit">
                Davom etish
              </SubmitButton>
            </Form.Item>
          </StyledForm>
          <Helper>Hisobingiz yo&#39;qmi ? Ro&#39;yxatdan o&#39;tish</Helper>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default Login;
