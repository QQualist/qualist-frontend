import { Row } from "@tanstack/react-table";
import DropdownAction from "@/components/DataTable/DropdownActions";
import {
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { copyToClipboard } from "@/utils/copyToClipboard";
import { PriorityData } from "@/types/priority";

interface IDropdownActions {
  row: Row<PriorityData>;
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
            Copy priority code
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
