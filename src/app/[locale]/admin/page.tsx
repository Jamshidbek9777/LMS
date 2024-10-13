"use client";

import { Box } from "@/components";
import { media } from "@/style";
import { Button, Card, Flex } from "antd";
import {
  Building,
  CirclePlus,
  GraduationCap,
  MoveUp,
  UserRound,
  UsersRound,
} from "lucide-react";
import { IoAddCircleSharp } from "react-icons/io5";
import styled, { css } from "styled-components";

export default function Home() {
  return (
    <ContentWrapper>
      <h2>Analitics</h2>
      <CardsFlex justify="space-between" gap={10}>
        {/* Students */}
        <StyledCard $context="students">
          <Flex vertical justify="space-between">
            <Box $justify="space-between" $align="center">
              <Box $justify="center" $align="center" $gap="10px">
                <RoleIconBox
                  $context="students"
                  $justify="center"
                  $align="center"
                >
                  <StudentsIcon color="white" />
                </RoleIconBox>
                <Text $context="cardTitle">Students</Text>
              </Box>
              <Button type="text">
                <AddIcon $context="students" />
              </Button>
            </Box>
            <Box $justify="space-between" $align="center">
              <Text $context="count">
                {/* <MoveUp color="#6CB039" /> */}
                245
              </Text>
              <StyledIcon src="/icons/students.svg" alt="" />
            </Box>
          </Flex>
        </StyledCard>
        {/* Mentors */}
        <StyledCard $context="mentors">
          <Flex vertical justify="space-between">
            <Box $justify="space-between" $align="center">
              <Box $justify="center" $align="center" $gap="10px">
                <RoleIconBox
                  $context="mentors"
                  $justify="center"
                  $align="center"
                >
                  <MentorsIcon color="white" />
                </RoleIconBox>
                <Text $contRoleIconBoxext="cardTitle">Students</Text>
              </Box>
              <Button type="text">
                <AddIcon $context="mentors" />
              </Button>
            </Box>
            <Box $justify="space-between" $align="center">
              <Text $context="count">
                {/* <MoveUp color="#6CB039" /> */}
                245
              </Text>
              <StyledIcon src="/icons/mentors.svg" alt="" />
            </Box>
          </Flex>
        </StyledCard>

        {/* Branches */}
        <StyledCard $context="branches">
          <Flex vertical justify="space-between">
            <Box $justify="space-between" $align="center">
              <Box $justify="center" $align="center" $gap="10px">
                <RoleIconBox
                  $context="branches"
                  $justify="center"
                  $align="center"
                >
                  <BranchesIcon color="white" />
                </RoleIconBox>
                <Text $context="cardTitle">Students</Text>
              </Box>
              <Button type="text">
                <AddIcon $context="branches" />
              </Button>
            </Box>
            <Box $justify="space-between" $align="center">
              <Text $context="count">
                {/* <MoveUp color="#6CB039" /> */}
                245
              </Text>
              <StyledIcon src="/icons/branches.svg" alt="" />
            </Box>
          </Flex>
        </StyledCard>
      </CardsFlex>

      <h2>Social</h2>
      <Flex gap={50}>
        <StyledCard>Total Students</StyledCard>
        <StyledCard>Total Mentors</StyledCard>
        <StyledCard>Branches</StyledCard>
      </Flex>

      <div>Email messages</div>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  background-color: white;
  min-height: 90vh;
  border-radius: 10px;
  padding: 20px;
`;

const StyledCard = styled(Card)<any>`
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

const Text = styled.p<any>`
  ${(props) =>
    props.$context === "heading" &&
    css`
      color: #0f172a;
      font-style: normal;
      font-weight: 700;
      line-height: 140%;
    `}

  //cart Title
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
    `}

    //Count
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

const StyledIcon = styled.img`
  height: 80px;
  ${media.xxl`
    width: 130px;
       `}

  ${media.xl`
    width: 100px;
       `}
`;

const AddIcon = styled(IoAddCircleSharp)<any>`
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

const RoleIconBox = styled(Box)<any>`
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

const StudentsIcon = styled(UsersRound)`
  height: 25px;
  width: 25px;

  ${media.xl`
    height: 20px;
    width: 20px;
     `}
`;
const MentorsIcon = styled(GraduationCap)`
  height: 25px;
  width: 25px;

  ${media.xl`
    height: 20px;
    width: 20px;
     `}
`;
const BranchesIcon = styled(Building)`
  height: 25px;
  width: 25px;

  ${media.xl`
    height: 20px;
    width: 20px;
     `}
`;

const CardsFlex = styled(Flex)`
  ${media.md`
    display: flex;
   flex-direction: column;
     `}
`;
