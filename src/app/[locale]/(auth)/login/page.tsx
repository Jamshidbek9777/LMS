"use client";

import { useRouter } from "@/navigation";
import { api, Endpoints } from "@/services";
import Link from "next/link";
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

type FieldType = {
  username?: string;
  password?: string;
};

const Login = () => {
  const router = useRouter();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      const response = await api.post(Endpoints.SignIn, values);
      const { access, refresh } = response.data;

      localStorage.setItem("access-token", access);
      localStorage.setItem("refresh-token", refresh);

      const allUsersResponse = await api.get("/");
      const allUsers = allUsersResponse.data;

      const currentUser = allUsers.find(
        (user: any) => user.username === values.username
      );

      if (currentUser) {
        localStorage.setItem("user-roles", currentUser.user_roles);
        console.log("User info and roles stored:", currentUser);
      } else {
        console.error("User not found with the given username.");
      }

      const role = localStorage.getItem("user-roles");

      if (role == "admin") {
        router.push("/admin/");
      } else if (role == "teacher") {
        router.push("/teacher/");
      } else {
        router.push("/student/");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    requestAnimationFrame(() => {
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
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
          <LoginTitle>Kirish</LoginTitle>
          <StyledForm
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item<FieldType>
              label={<Label>Username</Label>}
              name="username"
              rules={[
                { required: true, message: "Iltimos username kiriting!" },
              ]}
            >
              <AntdInput placeholder="username kiriting" />
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
