import { Row } from "@tanstack/react-table";
import DropdownAction from "@/components/DataTable/DropdownActions";
import {
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { copyToClipboard } from "@/utils/copyToClipboard";
import { ResponsibleData } from "@/types/responsible";

interface IDropdownActions {
  row: Row<ResponsibleData>;
  onOpen: () => void;
}

const DropdownActions = ({ row, onOpen }: IDropdownActions) => {
  return (
    <>
      <DropdownAction.Root>
        <DropdownAction.Trigger />

        <DropdownAction.Content>
          <DropdownAction.Item
            onClick={() => copyToClipboard(row.getValue("uuid"))}
          >
            Copy responsible code
          </DropdownAction.Item>
          <DropdownMenuItem className="cursor-pointer" onClick={onOpen}>
            Update
          </DropdownMenuItem>
        </DropdownAction.Content>
      </DropdownAction.Root>
    </>
  );
};

export default DropdownActions;
