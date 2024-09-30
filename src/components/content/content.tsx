"use client";

import { PropsWithChildren } from "react";
import { LayoutContent } from "../style";
import { usePathname } from "next/navigation";

export const Content = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();

  const isLoginPage =
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/recover" ||
    pathname === "/otp";

  return <LayoutContent isLoginPage={isLoginPage}>{children}</LayoutContent>;
};
