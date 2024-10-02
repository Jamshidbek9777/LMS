import { ROUTES } from "@/components";

import { LuHome } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { CiViewTable } from "react-icons/ci";
import { GrPlan } from "react-icons/gr";
import { FaRegQuestionCircle } from "react-icons/fa";

export const menuItems = [
  {
    id: 0,
    key: ROUTES.home,
    name: "Dashboard",
    icon: <LuHome />,
  },
  {
    id: 1,
    key: ROUTES.arizalar,
    name: "Arizalar",
    icon: <IoBookOutline />,
  },
  {
    id: 2,
    key: ROUTES.groups,
    name: "Guruhlar",
    icon: <CiViewTable />,
  },
  {
    id: 3,
    key: ROUTES.courses,
    name: "Kurslar",
    icon: <GrPlan />,
  },
  {
    id: 4,
    key: ROUTES.news,
    name: "Yangiliklar",
    icon: <FaRegQuestionCircle />,
  },
];
