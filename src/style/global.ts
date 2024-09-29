import { createGlobalStyle } from "styled-components";
import { media } from "./media";
import { pxToRem } from "@/lib";

export const GlobalStyles = createGlobalStyle`


  :root {
    --body: #F8FAFC;
    --dark: #000;
    --gray: #64748b;
    --black: #323232;
    --white: #FFFFFF;
    --primary: #0EA5E9;
    --secondary: #e7f6fd;
    --footer: #0D5A7B;
    --sky-100: #E0F2FE;
    --sky-300: #7DD3FC;
    --sky-900: #0A4C69;
    --card-bg: linear-gradient(180deg, #0ea5e9 0%, #0489c5 100%);
    --ss: 0.5rem; // 8px
    --xs: 0.75rem; // 12px
    --sm: 0.875rem; // 14px
    --base: 1rem; // 16px
    --lg: 1.125rem; // 18px
    --xl: 1.25rem; // 20px
    --2xl: 1.5rem; // 24px
    --thirty: 1.875rem; // 30px
    --3xl: 2rem; // 32px
    --4xl: 3rem; // 48px
    --5xl: 6rem; // 96px
    --full: 100%;

  }
  * {
    box-sizing: border-box;
    outline: none;
  }

  html, body, body div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, img, ul, li, ol, a {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-weight: normal;
    vertical-align: baseline;
    background: transparent;
  }

  body {
    background: var(--body);
    color: var(--dark);
    font-size: var(--lg);
    font-weight: 400;
  }

  /* #root {
    height: 100%;
  } */


  p {
    /* color: var(--sky-900); */
    font-size: var(--base);
  }

  /* h1 {
    color: var(--white);
    font-size: ${pxToRem(64)};
    font-weight: 700;
    line-height: 100%;

    ${media.md`
      font-size: ${pxToRem(40)};
    `}
  } */

  h2 {
    font-size: ${pxToRem(32)};
    font-weight: 700;
    line-height: 100%;

    ${media.md`
      font-size: ${pxToRem(24)};
    `}

    ${media.xs`
      font-size: ${pxToRem(20)};
    `}
  }

  h3 {
    font-size: ${pxToRem(32)};
    font-weight: 700;
    line-height: 100%; /* 64px */

    @media only screen and (max-width: 768px) {
      font-size: ${pxToRem(28)};
      line-height: ${pxToRem(28)};
    }

    @media only screen and (max-width: 480px) {
      font-size: ${pxToRem(24)};
      line-height: ${pxToRem(24)};
    }
  }

  h4 {
    color: var(--sky-900);
    font-weight: 700;
    line-height: var(--lg);
  }

  svg:not([fill]) {
    fill: currentColor;
  }

  nav, ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  .ant-space {
    width: 100% !important;
  }

  .ant-picker {
    width: 100% !important;
  }

  .slick-dots {
    bottom: 75px !important;
    z-index: 5 !important;

    /* ${media.md`
      bottom: 111px !important;
    `} */
    @media only screen and (max-width: 768px) {
      bottom: 111px !important;
    }

    @media only screen and (max-width: 576px) {
      bottom: 91px !important;
    }

    @media only screen and (max-width: 480px) {
      bottom: 81px !important;
    }
  }

  .sider-desktop {
    border-right: 1px solid #e2e8f0;

    ${media.md`
      display: none;
    `}
  }

  .ant-skeleton span {
    align-items: center !important;
    display: flex !important;
    justify-content: center !important;
  }

  .ant-pagination-item-active a {
    color: var(--white) !important;
  }

  .no-padding-modal .ant-modal-content {
    padding: 0 !important;
  }

  .no-padding-modal .ant-modal-close{
    color: #0EA5E9 !important;
    background-color: #FFFFFF !important;
    width: 40px !important;
    height: 40px !important;
    border-radius: 50% !important;
  }

  .ant-segmented-item-label, .ant-segmented-item-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ant-form-item-required {
  flex-direction: row-reverse;
}

.ant-form-item-required::before {
  margin-left: 4px;
}

.ant-form-item-required::after {
  width : 0;
  margin: 0 !important;
}


::-webkit-input-placeholder {
  color: #ABABAB !important;
  font-size: 15px;
  font-weight: 700;

  ${media.sm`
    font-size: 12px
  `}
}


`;
