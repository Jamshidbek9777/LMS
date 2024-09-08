"use client";

import { PropsWithChildren } from "react";
import { LayoutContent } from "../style";

export const Content = ({ children }: PropsWithChildren) => (
  <LayoutContent>{children}</LayoutContent>
);
