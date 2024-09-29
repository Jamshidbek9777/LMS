export const pxToRem = (pxValue: number, baseFontSize: number = 16): string => {
  const remValue = pxValue / baseFontSize;
  return `${remValue}rem`;
};
