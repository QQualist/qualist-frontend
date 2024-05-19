import LogoImage from "@/assets/images/logo.png";
import MenuOption from "./menu-option";

import { FaClipboardUser } from "react-icons/fa6";
import { FaListOl, FaStamp, FaUsers } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { MdOutlineLogin, MdSpaceDashboard, MdChecklist, MdSdCardAlert } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className='min-w-72 h-screen bg-layout px-[20px] py-[16px]'>
        <img src={LogoImage} className="w-[70px]" alt="Qualist logo made up of the letters Q and A" />
        <hr className="my-[25px] border-[#41414f]" />

        <div className="options-menu space-y-5">

          <MenuOption Icon={<MdSpaceDashboard />} text="Dashboard" />
          <MenuOption Icon={<MdChecklist />} text="Checklist" />
          <MenuOption Icon={<FaStamp />} text="Auditorias" />
          <MenuOption Icon={<MdSdCardAlert />} text="Não Conformidades" />
          <MenuOption Icon={<FaUsers />} text="Departamentos" />
          <MenuOption Icon={<FaClipboardUser />} text="Cargo" />
          <MenuOption Icon={<FaListOl />} text="Prioridade" />
          <MenuOption Icon={<FaGear />} text="Configuração" />
          <MenuOption Icon={<MdOutlineLogin />} text="Sair" />

        </div>

    </div>
  )
}

export default Sidebar