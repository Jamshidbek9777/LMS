"use client";
import { Container } from "@/components";
import type { FormProps } from "antd";
import { Flex, Form, message } from "antd";
import { useLayoutEffect } from "react";
import {
  AntdInput,
  AntdInputPassword,
  Helper,
  Label,
  LoginTitle,
  StyledForm,
  SubmitButton,
  Wrapper,
} from "../style";
import Link from "next/link";
import { api, Endpoints } from "@/services";
import { useRouter } from "@/navigation";

type FieldType = {
  username?: string;
  email?: string;
  password?: string;
};

const setVh = () => {
  const vh = window.innerHeight * 0.01;
  requestAnimationFrame(() => {
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
};

const Register = () => {
  const router = useRouter();
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      const response = await api.post(Endpoints.SignUp, values);
      message.success("Succesfully registered, please login");
      router.push("/login");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
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
          <LoginTitle>Ro&#39;yxatdan o&#39;tish</LoginTitle>

          <StyledForm
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item<FieldType>
              label={<Label>Ism va familiya</Label>}
              name="username"
              rules={[
                {
                  required: true,
                  message: "Iltimos to'liq username kiriting!",
                },
              ]}
            >
              <AntdInput placeholder="Ism va familiya kiriting" />
            </Form.Item>

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

            <Form.Item>
              <SubmitButton block htmlType="submit">
                Davom etish
              </SubmitButton>
            </Form.Item>
          </StyledForm>
          <Helper>
            Hisobingiz bormi ?{" "}
            <Link
              style={{ color: "#fff", borderBottom: "1px solid white" }}
              href={"/login"}
            >
              Kirish
            </Link>
          </Helper>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default Register;
