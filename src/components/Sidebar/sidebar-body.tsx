import SidebarItem from "./sidebar-item";
import { ListMenuItems } from "./list-menu-items";

const SidebarBody = () => {
  return (
    <div className="w-full h-full overflow-y-auto space-y-4 px-6">
      {ListMenuItems.map((item) => (
        <SidebarItem
          key={item.text}
          to={item.to}
          icon={item.icon}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default SidebarBody;
