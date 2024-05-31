import { SidebarContext } from "@/contexts/sidebar";
import { UserContext } from "@/contexts/user";
import { ContextSidebar } from "@/types/ContextSidebar";
import { ContextUser } from "@/types/ContextUser";
import { ElementType, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

interface ISidebarItem {
  to: string;
  text: string;
  icon: ElementType;
}

const SidebarItem = ({ text, icon: Icon, to }: ISidebarItem) => {
  const location = useLocation();
  const [isActive] = useState<boolean>(location.pathname === to);

  const { isOpen } = useContext(SidebarContext) as ContextSidebar;

  const { SignOut } = useContext(UserContext) as ContextUser;
  const { t } = useTranslation();

  const handleExitClick = () => {
    if (to === "/signin") {
      SignOut();
    }
  };

  return (
    <Link
      to={to}
      className={`flex w-full h-12 px-2 py-1 items-center my-3 ${
        isOpen ? "justify-start gap-2" : "justify-center"
      } rounded-md transition-all duration-200 text-white ${
        isActive
          ? "bg-light-blue hover:bg-light-blue"
          : "hover:bg-light-gray hover:bg-opacity-30"
      }`}
      onClick={handleExitClick}
    >
      <Icon size={24} className="transition-transform duration-200" />
      <span
        className={`transition-opacity duration-200 ${
          isOpen ? "opacity-100" : "opacity-0"
        } ${isOpen ? "w-auto" : "hidden"} overflow-hidden`}
      >
        {t(text)}
      </span>
    </Link>
  );
};

export default SidebarItem;
