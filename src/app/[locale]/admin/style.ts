import styled, {css} from "styled-components";
import {Card, Flex} from "antd";
import {media} from "@/style";
import {IoAddCircleSharp} from "react-icons/io5";
import {Box} from "@/components";
import {Building, CircleDollarSign, GraduationCap, UsersRound} from "lucide-react";

export const ContentWrapper = styled.div<{ isdarkmode: boolean }>`
    background-color: ${({isdarkmode}) => (isdarkmode ? "#333" : "#fff")};

    border-radius: 5px;
    padding: 5px 14px;
    margin-top: 15px;
`;

export const StyledCard = styled(Card)<any>`
    align-content: center;
    max-width: 500px;
    width: 100%;
    height: 150px;
    border-radius: 5px;
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
    ${(props) =>
            props.$context === "income" &&
            css`
                background-color: #cbffd2;
            `}
    ${media.xxl`
       height: 180px;
    `}
    ${media.xl`
    height: 100px;
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

            `} //secondary
    ${(props) =>
            props.$context === "secondary" &&
            css`
                color: #797878;
                font-style: normal;
                font-size: 14px;
                font-weight: 500;
                line-height: 140%;

            `} //cart Title
    ${(props) =>
            props.$context === "cardTitle" &&
            css`
                color: black;
                font-weight: 500;
                font-size: 16px;

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
            `} //card header
    ${(props) =>
            props.$context === "cardHeaderLeft" &&
            css`
                color: #3C556D;
                font-weight: 600;
                font-size: 18px;

                ${media.xxl`
                     font-size: 14px;
                 `}
            `}
    ${(props) =>
            props.$context === "cardHeaderRight" &&
            css`
                color: #3C556D;
                font-weight: 500;
                font-size: 18px;

                ${media.xxl`
                     font-size: 14px;
                 `}
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
    ${(props) =>
            props.$context === "income" &&
            css`
                background-color: #6cb039;
            `}
    height: 50px;
    width: 50px;
    border-radius: 50%;

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
export const IncomeIcon = styled(CircleDollarSign)`
    height: 25px;
    width: 25px;

    ${media.xl`
    height: 20px;
    width: 20px;
     `}
`

export const CardsFlex = styled(Flex)`
    margin-bottom: 15px;
    margin-top: 15px;
    ${media.md`
    display: flex;
    flex-direction: column;
     `}
`;

export const TopCoursesIconBox = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    background-color: #3a8bf5;
`
export const TopTeacherIconBox = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: grey;
    color: white;
`
export const TopCard = styled(Box)`
    display: flex;
    gap: 20px;

    ${media.xl`
        flex-direction: column;
     `}
`