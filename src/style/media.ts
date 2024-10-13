import { css, CSSObject } from "styled-components";

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const screenSizes: Record<string, number> = {
  xxl: 1350,
  xl: 1200,
  lg: 991,
  md: 768,
  sm: 576,
  xs: 480,
} as const;

type MediaFunction = (
  templateStrings: TemplateStringsArray,
  ...args: (CSSObject[] | keyof typeof screenSizes)[] | any
) => ReturnType<typeof css>;

type MediaObject = Record<string, MediaFunction>;

export const media: MediaObject = Object.keys(screenSizes).reduce(
  (acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${screenSizes[label] / 16}rem) {
        ${css(...args)}
      }
    `;
    return acc;
  },
  {} as MediaObject
);
