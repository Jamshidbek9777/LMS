import {
  createContext,
  useContext,
  useEffect,
  useState,
  PropsWithChildren,
} from "react";

import { ConfigProvider } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { lightTheme } from "@/style/lightTheme";
import { darkTheme } from "@/style/darkTheme";

const ThemeContext = createContext({
  isdarkmode: false,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const Antd = ({ children }: PropsWithChildren) => {
  const [isdarkmode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setIsDarkMode(savedTheme === "dark");
    setLoading(false);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isdarkmode ? "dark" : "light";
    setIsDarkMode(!isdarkmode);
    localStorage.setItem("theme", newTheme);
  };

  if (loading) return null;

  return (
    <ThemeContext.Provider value={{ isdarkmode, toggleTheme }}>
      <ConfigProvider
        csp={{ nonce: "LMS" }}
        theme={isdarkmode ? darkTheme : lightTheme}
      >
        <AntdRegistry>{children}</AntdRegistry>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};
