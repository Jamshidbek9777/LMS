"use client";

import {useRouter} from "@/navigation";
import {api, Endpoints} from "@/services";
import Link from "next/link";
import {Container} from "@/components";
import type {FormProps} from "antd";
import {Flex, Form, message} from "antd";
import {useLayoutEffect} from "react";
import Cookies from "js-cookie";
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
import styled from "styled-components";

type FieldType = {
    username?: string;
    password?: string;
};

const Login = () => {
    const router = useRouter();

    const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
        try {
            const response = await api.post(Endpoints.SignIn, values);
            const {access, refresh} = response.data;

            Cookies.set("access-token", access);
            Cookies.set("refresh-token", refresh);

            const allUsersResponse = await api.get("/");
            const allUsers = allUsersResponse.data;

            const currentUser = allUsers.find(
                (user: any) => user.username === values.username
            );

            message.success("Successfully login");

            Cookies.set("user-roles", currentUser.user_roles);
            Cookies.set("username", currentUser.username);

            const role = Cookies.get("user-roles");

            if (role === "admin") {
                router.push("/admin/");
            } else if (role === "teacher") {
                router.push("/teacher/");
            } else {
                router.push("/student/");
            }
        } catch (error: any) {
            if (
                error.response &&
                (error.response.status === 400 || error.response.status === 401)
            ) {
                message.error("Invalid username or password. Please try again.");
            } else {
                message.error("Login failed. Please try again later.");
            }
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
            <Container style={{width: "100%", margin: "0 20px"}}>
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
                            label={<Label>Login</Label>}
                            name="username"
                            rules={[{required: true, message: "Iltimos login kiriting!"}]}
                        >
                            <AntdInput placeholder="Login kiriting"/>
                        </Form.Item>

                        <Form.Item<FieldType>
                            label={<Label>Parol</Label>}
                            name="password"
                            rules={[{required: true, message: "Iltimos parol kiriting!"}]}
                        >
                            <AntdInputPassword placeholder="Parol kiriting"/>
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
                                    color: "#00b4d7",
                                    borderBottom: "1px solid #00b4d7",
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
                            style={{color: "#00b4d7", borderBottom: "1px solid #00b4d7"}}
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

// const MainFlex = styled(Flex)`
//   backdrop-filter: blur(10px);
// `;
