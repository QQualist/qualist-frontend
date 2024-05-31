import { ChecklistData } from "@/types/Checklist";
import { Row } from "@tanstack/react-table";
import DropdownAction from "@/components/DataTable/DropdownActions";
import {
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { copyToClipboard } from "@/utils/copyToClipboard";

interface IDropdownActions {
  row: Row<ChecklistData>;
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
            Copy item code
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
