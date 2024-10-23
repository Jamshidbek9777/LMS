"use client";

import {startTransition, useEffect, useState} from "react";
import {useLocale, useTranslations} from "next-intl";
import {useAppStore} from "@/store";
import {useTheme} from "@/providers";
import {locales} from "@/config";
import {usePathname, useRouter} from "@/navigation";
import {HeaderProps} from "@/types/components";
import {ROUTES, Box} from "@/components";
import styled from "styled-components";
import {Flex, Input, Menu, MenuProps, Select, Switch} from "antd";
import {LayoutSider} from "../style";
import {media} from "@/style";
import {
    BookOpenCheck, CalendarCheck,
    ChevronDown,
    CircleGauge,
    ClipboardCheck, CreditCard,
    LayoutList,
    Newspaper,
    Presentation,
    Settings, Sheet,
    ShieldCheck,
    UsersRound,
} from "lucide-react";
import Cookies from "js-cookie";

export const Sider = ({collapsed, isVisible}: HeaderProps) => {
    //lang
    const tAdmin = useTranslations("sidebar.adminLabels");
    const tTeacher = useTranslations('sidebar.teacherLabels')
    const tStudent = useTranslations('sidebar.studentLabels')

    //role
    const role = Cookies.get("user-roles");

    //admin sider items
    const adminItems: any = [
        {
            id: 0,
            key: ROUTES.adminDashboard,
            label: `${tAdmin("0")}`,
            icon: <CircleGauge size={18}/>,
        },
        {
            id: 1,
            key: ROUTES.adminApplications,
            label: `${tAdmin("1")}`,
            icon: <ClipboardCheck size={18}/>,
        },
        {
            id: 2,
            key: ROUTES.adminGroups,
            label: `${tAdmin("2")}`,
            icon: <UsersRound size={18}/>,
        },
        {
            id: 3,
            key: ROUTES.adminCourses,
            label: `${tAdmin("3")}`,
            icon: <LayoutList size={18}/>,
        },
        {
            id: 4,
            key: ROUTES.adminNews,
            label: `${tAdmin("4")}`,
            icon: <Newspaper size={18}/>,
        },
        {
            type: "divider",
        },
        {
            label: `${tAdmin("6")}`,
            icon: <Settings size={18}/>,
            children: [
                {
                    id: 5,
                    key: ROUTES.adminSettings,
                    label: `${tAdmin("7")}`,
                    icon: <ShieldCheck size={18}/>,
                },
                {
                    id: 6,
                    key: ROUTES.teacherSettings,
                    label: `${tAdmin("8")}`,
                    icon: <Presentation size={18}/>,
                },
                {
                    id: 7,
                    key: ROUTES.studentSettings,
                    label: `${tAdmin("9")}`,
                    icon: <ShieldCheck size={18}/>,
                },
            ],
        },
        {
            type: "divider",
        }
    ];

    //teacher sider items
    const teacherItems = [
        {
            id: 8,
            key: ROUTES.teacherDashboard,
            label: `${tTeacher('0')}`,
            icon: <CircleGauge size={18}/>,
        }
    ]

    //student sider items
    const studentItems = [
        {
            id: 9,
            key: ROUTES.studentDashboard,
            label: `${tStudent('0')}`,
            icon: <CircleGauge size={18}/>,
        },
        {
            id: 10,
            key: ROUTES.studentAssigments,
            label: `${tStudent('1')}`,
            icon: <ClipboardCheck size={18}/>,
        },
        {
            id: 11,
            key: ROUTES.studentTable,
            label: `${tStudent('2')}`,
            icon: <Sheet size={18}/>,
        },
        {
            id: 12,
            key: ROUTES.studentExams,
            label: `${tStudent('3')}`,
            icon: <BookOpenCheck size={18}/>,
        },
        {
            id: 13,
            key: ROUTES.studentAbsences,
            label: `${tStudent('4')}`,
            icon: <CalendarCheck size={18}/>,
        },
        {
            id: 14,
            key: ROUTES.studentPayment,
            label: `${tStudent('5')}`,
            icon: <CreditCard size={18}/>,
        },
        {
            id: 15,
            key: ROUTES.getStudentNews,
            label: `${tStudent('6')}`,
            icon: <Newspaper size={18}/>,
        },
        {
            type: "divider",
        },

    ]
    let menuItems: any[] = [];
    if (role === 'admin') {
        menuItems = [...adminItems,];
    } else if (role === 'teacher') {
        menuItems = [...teacherItems,];
    } else if (role === 'student') {
        menuItems = [...studentItems,];
    } else {
        // Fallback logic: redirect to login or show empty menu
        menuItems = [];
    }
    const router = useRouter();
    const locale = useLocale();
    const pathname = usePathname();
    const {setIsDrawer} = useAppStore();

    const {isdarkmode, toggleTheme} = useTheme();

    const [current, setCurrent] = useState<string>(() => {
        return localStorage.getItem("selectedMenuKey") || ROUTES.home;
    });

    const handleChange = (locale: any) => {
        startTransition(() => {
            router.replace(pathname, {locale});
        });
    };

    const localeNames: Record<string, string> = {
        uz: "O'zbek",
        ru: "Русский",
        en: "English",
    };

    const langOptions = locales.map((locale) => ({
        label: localeNames[locale],
        value: locale,
    }));

    const handleClick: MenuProps["onClick"] = (e) => {
        if (!isVisible) setIsDrawer(false);
        setCurrent(e.key);
        localStorage.setItem("selectedMenuKey", e.key);
        const findMenuItem = (items: any[], key: string): any => {
            for (const item of items) {
                if (item.key === key) return item;
                if (item.children) {
                    const found = findMenuItem(item.children, key);
                    if (found) return found;
                }
            }
            return null;
        };

        const selectedItem = findMenuItem(menuItems, e.key);
        if (selectedItem) {
            router.push(selectedItem.key);
        }
    };

    useEffect(() => {
        if (isdarkmode) {
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
        } else {
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode");
        }
    }, [isdarkmode]);

    return (
        <LayoutSider
            width={240}
            collapsible
            collapsed={collapsed}
            trigger={null}
            isdarkmode={isdarkmode}
            className={isVisible ? "sider-desktop" : ""}
        >
            {isVisible && (
                <Box
                    $justify="center"
                    $align="center"
                    $width="100%"
                    $height="53px"
                    style={{
                        color: isdarkmode ? "white" : "black",
                    }}
                >
                    {collapsed ? <h4>Logo</h4> : <h2>Logo</h2>}
                </Box>
            )}
            <Box $m="10px 5px">
                <SiderInput
                    variant="filled"
                    placeholder="Search"
                    size="large"
                    isdarkmode={isdarkmode}
                />
            </Box>
            <Menu
                style={{height: ""}}
                mode="inline"
                selectedKeys={[current]}
                theme={isdarkmode ? "dark" : "light"}
                items={menuItems}
                onClick={handleClick}
                defaultOpenKeys={[`${tAdmin("")}`]}
            />
            <Flex vertical style={{margin: "25px 27px"}}>
                <ThemeFlex
                    justify={collapsed ? "center" : "space-between"}
                    align="center"
                >
                    {!collapsed && <p>{tAdmin("10")}: </p>}
                    <Switch checked={isdarkmode} onChange={toggleTheme}/>
                </ThemeFlex>

                <LangFlex justify="space-between" align="center">
                    {!collapsed && <p>{tAdmin("11")} :</p>}
                    <Select
                        suffixIcon={
                            <ChevronDown style={{color: isdarkmode ? "white" : "black"}}/>
                        }
                        defaultValue={locale}
                        options={langOptions}
                        onChange={handleChange}
                    />
                </LangFlex>
            </Flex>
        </LayoutSider>
    );
};

export const ThemeFlex = styled(Flex)`
    ${media.lg`
    display: none !important;
  `}
`;

export const LangFlex = styled(Flex)`
    display: none;

    ${media.md`
    display: flex !important;
  `}
`;

export const SiderInput = styled(Input.Search)<{ isdarkmode: boolean }>`
    display: none;
    border: ${({isdarkmode}) =>
            isdarkmode ? "1px solid #555" : "transparent"} !important;
    color: ${({isdarkmode}) => (isdarkmode ? "#fff" : "#000")} !important;
    ${media.md`
    display: flex !important;
  `}
`;
