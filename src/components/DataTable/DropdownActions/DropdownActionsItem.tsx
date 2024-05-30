import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { DropdownMenuItemProps } from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";

interface IDropdownActionsItem extends DropdownMenuItemProps {
  children: ReactNode;
  onClick: () => void;
}

const DropdownActionsItem = ({ children, onClick }: IDropdownActionsItem) => {
  return (
    <DropdownMenuItem
      className="cursor-pointer"
      onClick={onClick}
    >
      {children}
    </DropdownMenuItem>
  );
};

export default DropdownActionsItem;
