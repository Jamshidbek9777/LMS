import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { menuItems } from "./sider/constants";

export const useMenuItem = () => {
  const pathname = usePathname();

  const selectedMenu = useMemo(
    () => menuItems.find((item) => pathname.endsWith(item.key)) || menuItems[0],
    [pathname]
  );

  return { selectedMenu };
};
