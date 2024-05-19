import React from 'react';

interface MenuOptionProps {
  Icon: JSX.Element;
  text: string;
}

const MenuOption: React.FC<MenuOptionProps> = ({ Icon, text }) => {
  return (
    <div className="menu-option flex items-center text-white py-[10px] px-[10px] rounded-[4px] transition ease-out duration-500 hover:bg-[#d9d9d914] cursor-pointer">
      <div className="icon text-[24px] mr-[14px]">{Icon}</div>
      <div className="text text-[18px]">{text}</div>
    </div>
  )
}

export default MenuOption;