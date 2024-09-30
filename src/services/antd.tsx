"use client";

import { PropsWithChildren } from "react";
import { ConfigProvider } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { theme } from "@/style";

export const Antd = ({ children }: PropsWithChildren) => {
  return (
    <ConfigProvider csp={{ nonce: "lets-trip" }} theme={{ ...theme }}>
      <AntdRegistry>{children}</AntdRegistry>
    </ConfigProvider>
  );
};
