import { useContext } from "react";
import SidebarBody from "./sidebar-body";
import SidebarHeader from "./sidebar-header";
import SidebarDivider from "./sidebar-line";
import { SidebarContext } from "@/contexts/sidebar";
import { ContextSidebar } from "@/types/ContextSidebar";

const Sidebar = () => {

  const { isOpen } = useContext(SidebarContext) as ContextSidebar;

  return (
    <div className={`${isOpen ? 'w-72': 'w-24'} h-screen flex flex-col bg-layout transition-all duration-300`}>
      <SidebarHeader />
      <SidebarDivider />
      <div className="flex-1 overflow-y-auto pt-12">
        <SidebarBody />
      </div>
    </div>
  );
};

export default Sidebar;
