import { ROUTES } from "@/components";

import { LuHome } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { CiViewTable } from "react-icons/ci";
import { GrPlan } from "react-icons/gr";
import { FaRegQuestionCircle } from "react-icons/fa";

export const menuItems = [
  {
    id: 0,
    key: ROUTES.dashboard,
    name: "Dashboard",
    icon: <LuHome />,
  },
  {
    id: 1,
    key: ROUTES.subjects,
    name: "Subjects",
    icon: <IoBookOutline />,
  },
  {
    id: 2,
    key: ROUTES.table,
    name: "Table",
    icon: <CiViewTable />,
  },
  {
    id: 3,
    key: ROUTES.plan,
    name: "Your plan",
    icon: <GrPlan />,
  },
  {
    id: 4,
    key: ROUTES.finals,
    name: "Finals",
    icon: <FaRegQuestionCircle />,
  },
];
