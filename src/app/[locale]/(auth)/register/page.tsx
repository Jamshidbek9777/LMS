"use client";
import { Container } from "@/components";
import type { FormProps } from "antd";
import { Flex, Form } from "antd";
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
import api from "@/services/api/api";
import { Endpoints } from "@/services/api/endpoints";
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
