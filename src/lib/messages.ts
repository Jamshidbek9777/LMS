import type { TErrorParams } from "@/types/app";
import { message } from "antd";
import { makeErrMsg } from "./general";

export const getMessages = async (locale: string) => {
  const messages = {
    ...(await import(`../../public/locales/${locale}/common.json`)).default,
    // ...(await import(`../../public/locales/${locale}/dashboard.json`)).default
  };

  return messages;
};

export const addMessage = (params: TErrorParams): void => {
  message.open({
    type: "error",
    content: makeErrMsg(params),
  });
};
