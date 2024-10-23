"use client";

import {useTransition} from "react";
import {deleteCookie} from "cookies-next";
import {useLocale} from "next-intl";
import {locales} from "@/config/i18n";
import {useAppStore} from "@/store";
import {useTheme} from "@/providers/antd";
import {usePathname, useRouter} from "@/navigation";
import {HeaderProps} from "@/types/components";
import {Desc, HeaderSelect, ThemeFlex, UserName} from "./style";
import {Flex, Button, Dropdown, MenuProps, Avatar, Badge} from "antd";
import {LayoutHeader, SearchInput} from "../style";
import {
    AlignLeft,
    AlignRight,
    Bell,
    ChevronDown,
    LogOut,
    Moon,
    SunMoon,
    UserRound,
} from "lucide-react";
import Cookies from "js-cookie";

export const Header = ({collapsed, setCollapsed, isVisible}: HeaderProps) => {
    const router = useRouter();
    const locale = useLocale();
    const pathname = usePathname();

    const {setIsDrawer} = useAppStore();
    const {isdarkmode, toggleTheme} = useTheme();
    const [isPending, startTransition] = useTransition();

    const handleOpenDrawer = () => {
        setIsDrawer(true);
    };
    const handleLogout = () => {
        // Remove tokens from cookies
        deleteCookie("access-token");
        deleteCookie("refresh-token");
        deleteCookie("user-roles");

        // Redirect to the login page
        router.replace("/login"); // Replace to ensure no back navigation to protected pages
    };

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

    const items: MenuProps["items"] = [
        {
            label: (
                <>
                    <Flex vertical>
                        <UserName isdarkmode={isdarkmode}>{Cookies.get("username")}</UserName>
                        <Desc isdarkmode={isdarkmode}>{Cookies.get("user-roles")}</Desc>
                    </Flex>
                </>
            ),
            key: "2",
            // onClick: handleLogout,
        },
        {
            type: "divider",
        },
        {
            label: (
                <Flex align="center" justify="space-between" style={{width: "100%"}}>
                    <h1>Log out</h1> <LogOut size={20}/>
                </Flex>
            ),
            key: "3",
            onClick: handleLogout,
        },
    ];

    return (
        <>
            <LayoutHeader isdarkmode={isdarkmode}>
                <Flex align="center" gap={20}>
                    <Button
                        className={isVisible ? "sider-desktop" : ""}
                        type="text"
                        icon={collapsed ? <AlignRight/> : <AlignLeft/>}
                        onClick={() => setCollapsed?.(!collapsed)}
                    />

                    <Button
                        className={isVisible ? "header-drawer" : ""}
                        type="text"
                        icon={collapsed ? <AlignRight/> : <AlignLeft/>}
                        onClick={handleOpenDrawer}
                    />

                    <SearchInput
                        allowClear
                        variant="filled"
                        placeholder="Search"
                        size="large"
                        isdarkmode={isdarkmode}
                    />
                </Flex>

                <Flex align="center">
                    <Button type="text">
                        <Badge count={5}>
                            <Bell color={isdarkmode ? "white" : "black"}/>
                        </Badge>
                    </Button>

                    <HeaderSelect
                        variant="borderless"
                        suffixIcon={
                            <ChevronDown style={{color: isdarkmode ? "white" : "black"}}/>
                        }
                        loading={isPending}
                        defaultValue={locale}
                        options={langOptions}
                        onChange={handleChange}
                    />

                    <ThemeFlex>
                        <Button onClick={toggleTheme} type="text">
                            {isdarkmode ? <SunMoon/> : <Moon/>}
                        </Button>
                    </ThemeFlex>

                    <Dropdown menu={{items}}>
                        <Flex align="center" gap="small">
                            <Avatar
                                size={40}
                                src={"/images/profile.jpg"}
                                icon={<UserRound size={21}/>}
                                style={{
                                    color: isdarkmode ? "white" : "black",
                                }}
                            />
                        </Flex>
                    </Dropdown>
                </Flex>
            </LayoutHeader>
        </>
    );
};
