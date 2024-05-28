import { MdNotifications } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "../ui/dropdown-menu";
import Notification from "../Notification";
import { MdWarning } from "react-icons/md";

const Notifications = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative">
        <MdNotifications className="text-white" size={24} />
        <span className="absolute w-max h-max p-1 flex -top-1 -right-1 items-center justify-center text-[8px] font-bold leading-none text-white bg-light-blue rounded-full">
          10
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96 p-0 border-none">
        <div className="flex w-full p-3 justify-between dark:bg-dark-gray border-b border-light-blue/40">
          <span className="text-sm font-bold">Notifications</span>
          <button type="button" className="text-xs font-bold text-light-blue">
            Mark all as read
          </button>
        </div>
        <div className="flex flex-col">
          <Notification.Root>
            <Notification.Icon icon={MdWarning} />
            <Notification.Content>
              {`Você recebeu uma não conformidade no item: #A4Z7 do checklist
              Plano de Projeto`}
            </Notification.Content>
          </Notification.Root>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Notifications;
