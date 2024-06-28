import {
  MdChecklist,
  MdSdCardAlert,
  MdSpaceDashboard,
  MdPeopleAlt,
  MdSettings,
  MdOutlineLogin,
} from "react-icons/md";
import { FaIdBadge, FaListOl } from "react-icons/fa";
import { RiFileSearchFill } from "react-icons/ri";
import { ElementType } from "react";

interface IListMenuItems {
  to: string;
  text: string;
  icon: ElementType;
}

export const ListMenuItems: IListMenuItems[] = [
  {
    to: "/dashboard",
    text: "Dashboard",
    icon: MdSpaceDashboard,
  },
  {
    to: "/checklists",
    text: "Checklists",
    icon: MdChecklist,
  },
  {
    to: "/audits",
    text: "Audits",
    icon: RiFileSearchFill,
  },
  {
    to: "/unconformities",
    text: "Unconformities",
    icon: MdSdCardAlert,
  },
  {
    to: "/departaments",
    text: "Departaments",
    icon: MdPeopleAlt,
  },
  {
    to: "/roles",
    text: "Roles",
    icon: FaIdBadge,
  },
  {
    to: "/priorities",
    text: "Priorities",
    icon: FaListOl,
  },
  {
    to: "/settings",
    text: "Settings",
    icon: MdSettings,
  },
  {
    to: "/signin",
    text: "Exit",
    icon: MdOutlineLogin,
  },
];
