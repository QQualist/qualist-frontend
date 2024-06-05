import LogoImage from "@/assets/images/logo.png";
import { SidebarContext } from "@/contexts/sidebar";
import { ContextSidebar } from "@/types/ContextSidebar";
import { useContext } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const SidebarHeader = () => {
  const { isOpen, toggleIsOpen } = useContext(SidebarContext) as ContextSidebar;

  return (
    <div className="flex h-20 p-6 justify-between items-center lg:py-0 lg:px-6 lg:h-16">
      <img className="lg:w-16" src={LogoImage} alt="Qualist logo made up of the letters Q and A" />
      <button
        onClick={toggleIsOpen}
        className={`text-white duration-300 relative left-2.5 ${isOpen && "rotate-180"}`}
      >
        <MdOutlineKeyboardArrowRight size={24} />
      </button>
    </div>
  );
};

export default SidebarHeader;
