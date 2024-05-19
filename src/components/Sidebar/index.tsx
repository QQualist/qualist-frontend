import LogoImage from "@/assets/images/logo.png";
import { FaClipboardUser } from "react-icons/fa6";
import { FaListOl, FaStamp, FaUsers } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { MdSpaceDashboard, MdChecklist, MdSdCardAlert } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Sidebar = () => {

  const [open, setOpen] = useState(true);
  const {t} = useTranslation();

  const Menus = 
  [
    { title: t('Dashboard'), icon: <MdSpaceDashboard /> },
    { title: t('Checklist'), icon: <MdChecklist /> },
    { title: t('Audits'), icon: <FaStamp /> },
    { title: t('Nonconformities'), icon: <MdSdCardAlert /> },
    { title: t('Departments'), icon: <FaUsers /> },
    { title: t('Position'), icon: <FaClipboardUser /> },
    { title: t('Priority'), icon: <FaListOl /> },
    { title: t('Settings'), icon: <FaGear /> },
  ];

  return (

    <div className="flex">

      <div
        className={` ${
          open ? "w-72" : "w-[90px] "
        } bg-layout h-screen p-5  pt-5 relative duration-300`}
      >

        <div className={`absolute cursor-pointer -right-3 top-6 w-7 text-2xl text-white
          ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}><IoIosArrowForward/>
        </div>
          
        <div className="flex gap-x-4 items-center">

          <img
            src={LogoImage} 
            alt="Qualist logo made up of the letters Q and A"
            className={`w-15 cursor-pointer duration-500`}
          />

        </div>

        <hr className={`${!open && "hidden"} my-4 border border-medium-gray`}/>

        <ul className="pt-6">
          {Menus.map((Menu, index) => (
                    <li
                      key={index}
                      className={`flex  rounded-md p-3 cursor-pointer hover:bg-menu-hover text-white text-sm items-center gap-x-4 
                      mt-5 ${index === 0 && "bg-white text-layout"} ${!open && "p-2 px-1 py-2 flex justify-center"}	`}
                    >
                      <div className="text-2xl">{Menu.icon}</div>
                      <span className={`${!open && "hidden"} origin-left duration-200`}>
                        <div className="text-base">{Menu.title}</div>
                      </span>
                    </li>

                  ))}
                </ul>
      </div>

    </div>

  );
};


export default Sidebar;