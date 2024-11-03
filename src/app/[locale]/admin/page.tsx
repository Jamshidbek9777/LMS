"use client";

import {Box} from "@/components";
import {useTheme} from "@/providers";
import {Avatar, Button, Divider, Flex} from "antd";
import {
    CardsFlex,
    ContentWrapper,
    StyledCard,
    RoleIconBox,
    StudentsIcon,
    Text,
    MentorsIcon,
    BranchesIcon, IncomeIcon, TopCoursesIconBox, TopCard, TopTeacherIconBox
} from "./style";
import {Equal, MoveDown, MoveUp} from "lucide-react";
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import {FaAndroid, FaCode, FaFigma, FaPython, FaReact} from "react-icons/fa";
import {RiEnglishInput, RiFlutterFill} from "react-icons/ri";
import {UserOutlined} from "@ant-design/icons";

export default function Home() {
    const {isdarkmode} = useTheme();
    const incomes = [
        {date: 'January', income: "100"},
        {date: 'February', income: "200"},
        {date: 'March', income: "320"},
        {
            date: 'April',
            income: "200"
        }, {date: 'May', income: "340"},
        {date: 'June', income: "500"},
        {date: 'July', income: "300"},
        {date: 'August', income: "700"},
        {date: 'September', income: "300"},
        {date: 'October', income: "300"},
        {date: 'November', income: "350"},
        {date: 'December', income: "300"},

    ]
    const topCourses = [
        {id: 1, name: 'Frontend', studentsN: '500', icon: <FaReact size={25} color={'white'}/>},
        {id: 2, name: 'Backend', studentsN: '400', icon: <FaCode size={25} color={'white'}/>},
        {id: 3, name: 'Android', studentsN: '380', icon: <FaAndroid size={25} color={'white'}/>},
        {id: 4, name: 'UI/UX', studentsN: '320', icon: <FaFigma size={25} color={'white'}/>},
        {id: 5, name: 'English', studentsN: '280', icon: <RiEnglishInput size={25} color={'white'}/>},
        {id: 6, name: 'Flutter', studentsN: '223', icon: <RiFlutterFill size={25} color={'white'}/>},
        {id: 7, name: 'Python', studentsN: '115', icon: <FaPython size={25} color={'white'}/>},
    ]
    const topTeachers = [
        {id: 1, name: 'Jamshidbek Rasulov', email: 'jamshidbekrasulovuz@gmail.com', rank: '5'},
        {id: 2, name: 'Jamshidbek Rasulov', email: 'jamshidbekrasulovuz@gmail.com', rank: '5'},
        {id: 3, name: 'Jamshidbek Rasulov', email: 'jamshidbekrasulovuz@gmail.com', rank: '5'},
        {id: 4, name: 'Jamshidbek Rasulov', email: 'jamshidbekrasulovuz@gmail.com', rank: '5'},
        {id: 5, name: 'Jamshidbek Rasulov', email: 'jamshidbekrasulovuz@gmail.com', rank: '5'},
    ]

    const requests = [
        {id: 1, name: 'Jamshidbek Rasulov', email: 'jamshidbekrasulovuz@gmail.com', type: 'Frontend'},
        {id: 2, name: 'Jamshidbek Rasulov', email: 'jamshidbekrasulovuz@gmail.com', type: 'Frontend'},
        {id: 3, name: 'Jamshidbek Rasulov', email: 'jamshidbekrasulovuz@gmail.com', type: 'Frontend'},
        {id: 4, name: 'Jamshidbek Rasulov', email: 'jamshidbekrasulovuz@gmail.com', type: 'Frontend'},
        {id: 5, name: 'Jamshidbek Rasulov', email: 'jamshidbekrasulovuz@gmail.com', type: 'Frontend'},
    ]
    return (
        <>
            <Text $context="heading">Dashboard</Text>
            <Text $context={'secondary'}>Welcome to Learning management system</Text>
            <ContentWrapper isdarkmode={isdarkmode}>
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
                                    <Flex vertical>

                                        <Text $context="cardTitle">Students</Text>
                                        <Text $context="count">
                                            {/* <MoveUp color="#6CB039" /> */}
                                            245
                                        </Text>
                                    </Flex>
                                </Box>

                                <MoveUp size={30} color={'green'}/>
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
                                    <Flex vertical>

                                        <Text $context="cardTitle">Teachers</Text>
                                        <Text $context="count">
                                            {/* <MoveUp color="#6CB039" /> */}
                                            245
                                        </Text>
                                    </Flex>
                                </Box>
                                <MoveDown size={30} color={'red'}/>

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
                                    <Flex vertical>

                                        <Text $context="cardTitle">Branches</Text>
                                        <Text $context="count">
                                            {/* <MoveUp color="#6CB039" /> */}
                                            245
                                        </Text>
                                    </Flex>
                                </Box>
                                <Equal size={30} color={'blue'}/>

                            </Box>

                        </Flex>
                    </StyledCard>

                    {/*Total income*/}
                    <StyledCard $context="income">
                        <Flex vertical justify="space-between">
                            <Box $justify="space-between" $align="center">
                                <Box $justify="center" $align="center" $gap="10px">
                                    <RoleIconBox
                                        $context="income"
                                        $justify="center"
                                        $align="center"
                                    >
                                        <IncomeIcon color="white"/>
                                    </RoleIconBox>
                                    <Flex vertical>

                                        <Text $context="cardTitle">Income</Text>
                                        <Text $context="count">

                                            245
                                        </Text>
                                    </Flex>
                                </Box>
                                <MoveUp size={30} color={'green'}/>

                            </Box>

                        </Flex>
                    </StyledCard>
                </CardsFlex>
            </ContentWrapper>

        {/* total income chart*/}
            <ContentWrapper isdarkmode={isdarkmode}>
                <div style={{width: "100%", height: "300px", marginTop: "10px"}}>
                    <ResponsiveContainer height={'100%'} width={'100%'}>
                        <AreaChart data={incomes}>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <YAxis dataKey={'income'}/>
                            <XAxis dataKey={'date'}/>
                            <Area type="monotone" dataKey="income" stroke="#8884d8" fill="#0b23ff30"/>
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </ContentWrapper>

        {/*top cources*/}
            <TopCard>
                <ContentWrapper isdarkmode={isdarkmode} style={{width: "100%", padding: "20px"}}>

                    <Flex vertical justify={"space-between"} gap={10}>
                        <Box $justify='space-between' $mb={'15px'}>
                            <Text $context={'cardHeaderLeft'}>Top cources</Text>
                            <Text $context={'cardHeaderRight'}>Students</Text>
                        </Box>
                        {topCourses.map((cource) => (
                            // eslint-disable-next-line react/jsx-key
                            <Box $justify={"space-between"} $align={"center"}
                            >
                                <Box $align={'center'} $gap={'10px'}>
                                    <TopCoursesIconBox>
                                        {cource.icon}
                                    </TopCoursesIconBox>

                                    <p>{cource.name}</p>
                                </Box>
                                <div>
                                    <p>{cource.studentsN}</p>
                                </div>
                            </Box>
                        ))}
                    </Flex>

                </ContentWrapper>

                {/*top teachers*/}
                <ContentWrapper isdarkmode={isdarkmode} style={{width: "100%", padding: "20px"}}>

                    <Flex vertical justify={"space-between"} gap={10}>
                        <Box $justify='space-between' $mb={'20px'}>
                            <Text $context={'cardHeaderLeft'}>Top teachers</Text>
                            <Text $context={'cardHeaderRight'}>Rank</Text>
                        </Box>

                        {topTeachers.map((teacher) => (
                            // eslint-disable-next-line react/jsx-key
                            <>
                                <Divider/>
                                <Box $justify={"space-between"} $align={"center"}
                                >
                                    <Box $align={'center'} $gap={'10px'}>
                                        <TopTeacherIconBox
                                        >
                                            {teacher.id}

                                        </TopTeacherIconBox>
                                        <div>
                                            <p>{teacher.name}</p>
                                            <p style={{fontSize: '10px', color: 'grey'}}>{teacher.email}</p>
                                        </div>
                                    </Box>

                                    <div>
                                        <p>{teacher.rank}</p>
                                    </div>
                                </Box>
                            </>

                        ))}

                    </Flex>

                </ContentWrapper>

                {/*requests*/}
                <ContentWrapper isdarkmode={isdarkmode} style={{width: "100%", padding: "20px"}}>

                    <Flex vertical justify={"space-between"} gap={10}>
                        <Box $justify='space-between' $mb={'20px'}>
                            <Text $context={'cardHeaderLeft'}>Requests</Text>
                            <Text $context={'cardHeaderRight'}>See all</Text>
                        </Box>
                        {requests.map((request) => (
                            // eslint-disable-next-line react/jsx-key
                            <>
                                <Divider/>
                                <Box $justify={"space-between"} $align={"center"}
                                >

                                    <Box $align={'center'} $gap={'10px'}>
                                        <div
                                        >
                                            {/*{request.icon}*/}
                                            <Avatar size={40} icon={<UserOutlined/>}/>

                                        </div>
                                        <p>{request.name}</p>
                                    </Box>

                                    <div>
                                        <p>{request.type}</p>
                                    </div>
                                </Box>
                            </>

                        ))}
                    </Flex>
                </ContentWrapper>
            </TopCard>
        </>
    )
        ;
}
