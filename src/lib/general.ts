import { TErrorParams } from "@/types/app";

export const TOKEN = "access-token";

export const pxToRem = (pxValue: number, baseFontSize: number = 16): string => {
  const remValue = pxValue / baseFontSize;
  return `${remValue}rem`;
};

export const makeErrMsg = (params: TErrorParams): string => {
  const { error, locale } = params;

  if ("errors" in error && error.errors instanceof Array) {
    // @ts-ignore
    return error.errors[0][locale];
  }

  if (typeof error === "string") {
    return error;
  }

  return error.message;
};
