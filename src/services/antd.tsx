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
  isDarkMode: false,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const Antd = ({ children }: PropsWithChildren) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setIsDarkMode(savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ConfigProvider
        csp={{ nonce: "LMS" }}
        theme={isDarkMode ? darkTheme : lightTheme}
      >
        <AntdRegistry>{children}</AntdRegistry>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};
