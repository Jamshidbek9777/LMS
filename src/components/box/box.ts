import styled, { CSSProp } from "styled-components";

type Props = {
  $align?: "center" | "end" | "start";
  $css?: CSSProp;
  $direction?: "row" | "row-reverse" | "column" | "column-reverse";
  $wrap?: string;
  $justify?:
    | "center"
    | "end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "start";
  $gap?: string;
  $height?: string;
  $mr?: string;
  $m?: string;
  $ml?: string;
  $mb?: string;
  $mt?: string;
  $p?: string;
  $pb?: string;
  $pt?: string;
  $rounded?: string;
  $width?: string;
};

export const Box = styled.div<Props>`
  align-items: ${({ $align }) => $align};
  border-radius: ${({ $rounded }) => $rounded};
  display: ${({ $align, $justify, $direction }) =>
    ($align || $justify || $direction) && "flex"};
  flex-direction: ${({ $direction }) => $direction};
  justify-content: ${({ $justify }) => $justify};
  gap: ${({ $gap }) => $gap};
  height: ${({ $height }) => $height};
  margin: ${({ $m }) => $m};
  margin-right: ${({ $mr }) => $mr};
  margin-left: ${({ $ml }) => $ml};
  margin-bottom: ${({ $mb }) => $mb};
  margin-top: ${({ $mt }) => $mt};
  padding: ${({ $p }) => $p};
  padding-bottom: ${({ $pb }) => $pb};
  padding-top: ${({ $pt }) => $pt};
  width: ${({ $width }) => $width};
  ${({ $css }) => $css}
`;
