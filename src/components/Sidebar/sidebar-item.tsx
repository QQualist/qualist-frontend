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
      className={`flex w-full h-10 px-2 py-1 gap-2 items-center ${
        isOpen ? "justify-start" : "justify-center"
      } rounded-md transition-all duration-200 text-white ${
        isActive && "bg-light-blue"
      } hover:bg-light-blue`}
      onClick={handleExitClick}
    >
      <Icon size={24} className="transition-transform duration-200" />
      <span
        className={`transition-opacity duration-200 ${
          isOpen ? "opacity-100" : "opacity-0"
        } ${isOpen ? "w-auto" : "w-0"} overflow-hidden`}
      >
        {t(text)}
      </span>
    </Link>
  );
};

export default SidebarItem;
