"use client";

import { PropsWithChildren } from "react";
import { LayoutContent } from "../style";
import { usePathname } from "next/navigation";
import { useTheme } from "@/providers/antd";

export const Content = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const { isdarkmode } = useTheme();

  const isloginpage =
    pathname.endsWith("/login") ||
    pathname.endsWith("/register") ||
    pathname.endsWith("/recover") ||
    pathname.endsWith("/otp");

  return (
    <LayoutContent isdarkmode={isdarkmode} isloginpage={isloginpage}>
      {children}
    </LayoutContent>
  );
};
