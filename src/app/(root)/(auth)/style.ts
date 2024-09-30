import { media } from "@/style";
import { Button, Form, Input } from "antd";
import styled from "styled-components";

type FieldType = {
  otp?: number;
  fullname?: string;
  email?: string;
  password?: string;
};
export const Wrapper = styled.div`
  align-items: center;
  background-color: #4880ff;
  display: flex;
  min-height: calc(var(--vh, 1vh) * 100);
  justify-content: center;
`;

export const LoginTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 40px;

  ${media.sm`
    font-size: 36px;
  `}

  ${media.xs`
    /* font-size: 25px */
  `}
`;

export const Label = styled.p`
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  margin-top: 5px;

  ${media.sm`
    font-size: 14px
  `}
`;

export const AntdInput = styled(Input)`
  font-size: 16px;
  font-weight: 600;
  color: #535353 !important;

  ${media.sm`
    padding: 10px !important;
  `}
`;

export const AntdInputPassword = styled(Input.Password)`
  font-size: 16px;
  font-weight: 600;
  color: #535353 !important;

  ${media.sm`
    padding: 10px !important;
  `}
`;

export const Helper = styled.p`
  color: #fff;
  margin-top: 10px;

  ${media.sm`
    font-size: 14px;
  `}
`;

export const StyledForm = styled(Form<FieldType>)`
  width: 500px;

  ${media.sm`
    width: 400px;
  `}

  ${media.xs`
    width: 100%;
  `}
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;

  ${media.sm`
   height: 44px !important;
   font-size: 16px !important;
  `}
`;

export const CancelButton = styled(Button)`
  margin-top: 10px;
  background-color: red !important;

  ${media.sm`
   height: 44px !important;
   font-size: 16px !important;
  `}
`;
