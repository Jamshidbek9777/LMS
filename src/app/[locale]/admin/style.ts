import styled, {css} from "styled-components";
import {Card, Flex} from "antd";
import {media} from "@/style";
import {IoAddCircleSharp} from "react-icons/io5";
import {Box} from "@/components";
import {Building, GraduationCap, UsersRound} from "lucide-react";

export const ContentWrapper = styled.div<{ isdarkmode: boolean }>`
    background-color: ${({isdarkmode}) => (isdarkmode ? "#333" : "#fff")};
    min-height: 90vh;
    border-radius: 10px;
    padding: 20px;
`;

export const StyledCard = styled(Card)<any>`
    align-content: center;
    max-width: 500px;
    width: 100%;
    height: 200px;
    ${(props) =>
            props.$context === "students" &&
            css`
                background-color: #cbffd2;
            `}
    ${(props) =>
            props.$context === "mentors" &&
            css`
                background-color: #ffe6d5ed;
            `}
    ${(props) =>
            props.$context === "branches" &&
            css`
                background-color: #0b23ff30;
            `}
    ${media.xxl`
       height: 180px;
    `}
    ${media.xl`
    height: 150px;
       `}
    ${media.md`
  max-width: 100%;
       `}
`;

export const Text = styled.p<any>`
    ${(props) =>
            props.$context === "heading" &&
            css`
                color: #0f172a;
                font-style: normal;
                font-size: 24px;
                font-weight: 600;
                line-height: 140%;

            `} //cart Title
    ${(props) =>
            props.$context === "cardTitle" &&
            css`
                color: black;
                font-weight: 700;
                font-size: 20px;

                ${media.xxl`
            font-size: 17px;
       `}

                ${media.xl`
            font-size: 14px;
       `}
            `} //Count
    ${(props) =>
            props.$context === "count" &&
            css`
                color: black;
                font-weight: 700;
                font-size: 35px;

                ${media.xxl`
            font-size: 25px;
       `}
            `}
`;

export const StyledIcon = styled.img`
    height: 80px;
    ${media.xxl`
    width: 130px;
       `}

    ${media.xl`
    width: 100px;
       `}
`;

export const AddIcon = styled(IoAddCircleSharp)<any>`
    ${(props) =>
            props.$context === "students" &&
            css`
                color: #6cb039;
            `}
    ${(props) =>
            props.$context === "mentors" &&
            css`
                color: #f6d549;
            `}
    ${(props) =>
            props.$context === "branches" &&
            css`
                color: #3a8bf5;
            `}
    height: 35px;
    width: 35px;

    ${media.xl`
    height: 25px;
    width: 25px;
     `}
`;

export const RoleIconBox = styled(Box)<any>`
    ${(props) =>
            props.$context === "students" &&
            css`
                background-color: #6cb039;
            `}
    ${(props) =>
            props.$context === "mentors" &&
            css`
                background-color: #f6d549;
            `}
    ${(props) =>
            props.$context === "branches" &&
            css`
                background-color: #3a8bf5;
            `}
    height: 50px;
    width: 50px;
    border-radius: 10px;

    ${media.xl`
    height: 40px;
    width: 40px;
     `}
`;

export const StudentsIcon = styled(UsersRound)`
    height: 25px;
    width: 25px;

    ${media.xl`
    height: 20px;
    width: 20px;
     `}
`;
export const MentorsIcon = styled(GraduationCap)`
    height: 25px;
    width: 25px;

    ${media.xl`
    height: 20px;
    width: 20px;
     `}
`;
export const BranchesIcon = styled(Building)`
    height: 25px;
    width: 25px;

    ${media.xl`
    height: 20px;
    width: 20px;
     `}
`;

export const CardsFlex = styled(Flex)`
    margin-bottom: 15px;
    ${media.md`
    display: flex;
    flex-direction: column;
     `}
`;
