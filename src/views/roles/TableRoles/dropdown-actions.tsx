import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { Row } from "@tanstack/react-table";
import { useTranslation } from "react-i18next";
import { copyToClipboard } from "@/utils/copyToClipboard";
import { RolesData } from "@/types/roles";

interface IDropdownActions {
  row: Row<RolesData>;
  onOpen: () => void;
}

const DropdownActions = ({ row, onOpen }: IDropdownActions) => {
  const { t } = useTranslation();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="w-full flex justify-center">
            <Button variant="ghost" className="flex justify-center w-8 h-8 p-0">
              <span className="sr-only">Open menu</span>
              <MdOutlineMoreHoriz className="h-4 w-4" />
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="space-y-1">
          <DropdownMenuLabel className="w-full flex justify-between">
            <span>{t("Actions")}</span>
          </DropdownMenuLabel>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => copyToClipboard(row.getValue("uuid"))}
          >
            Copy role code
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer" onClick={onOpen}>
            Update
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default DropdownActions;
