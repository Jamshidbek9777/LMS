"use client";

import {Box} from "@/components";
import {useTheme} from "@/providers";
import {Button, Flex} from "antd";
import {
    CardsFlex,
    ContentWrapper,
    StyledCard,
    RoleIconBox,
    StudentsIcon,
    AddIcon,
    StyledIcon,
    Text,
    MentorsIcon,
    BranchesIcon
} from "./style";

export default function Home() {
    const {isdarkmode} = useTheme();
    return (
        <ContentWrapper isdarkmode={isdarkmode}>
            <Text $context="heading">Analitics</Text>
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
                                    <StudentsIcon color="white"/>
                                </RoleIconBox>
                                <Text $context="cardTitle">Students</Text>
                            </Box>
                            <Button type="text">
                                <AddIcon $context="students"/>
                            </Button>
                        </Box>
                        <Box $justify="space-between" $align="center">
                            <Text $context="count">
                                {/* <MoveUp color="#6CB039" /> */}
                                245
                            </Text>
                            <StyledIcon src="/icons/students.svg" alt=""/>
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
                                    <MentorsIcon color="white"/>
                                </RoleIconBox>
                                <Text $contRoleIconBoxext="cardTitle">Students</Text>
                            </Box>
                            <Button type="text">
                                <AddIcon $context="mentors"/>
                            </Button>
                        </Box>
                        <Box $justify="space-between" $align="center">
                            <Text $context="count">
                                {/* <MoveUp color="#6CB039" /> */}
                                245
                            </Text>
                            <StyledIcon src="/icons/mentors.svg" alt=""/>
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
                                    <BranchesIcon color="white"/>
                                </RoleIconBox>
                                <Text $context="cardTitle">Students</Text>
                            </Box>
                            <Button type="text">
                                <AddIcon $context="branches"/>
                            </Button>
                        </Box>
                        <Box $justify="space-between" $align="center">
                            <Text $context="count">
                                {/* <MoveUp color="#6CB039" /> */}
                                245
                            </Text>
                            <StyledIcon src="/icons/branches.svg" alt=""/>
                        </Box>
                    </Flex>
                </StyledCard>
            </CardsFlex>

            <Text $context="heading">Social</Text>

           <h1>
               Coming soon
           </h1>

            {/*<div>Email messages</div>*/}
        </ContentWrapper>
    );
}
