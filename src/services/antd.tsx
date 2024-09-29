"use client";

import { PropsWithChildren } from "react";
import { MessageInstance } from "antd/es/message/interface";
import { ConfigProvider } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { theme } from "@/style";

let message: MessageInstance;

export const Antd = ({ children }: PropsWithChildren) => {
  return (
    <ConfigProvider csp={{ nonce: "lets-trip" }} theme={{ ...theme }}>
      <AntdRegistry>{children}</AntdRegistry>
    </ConfigProvider>
  );
};

export { message };
