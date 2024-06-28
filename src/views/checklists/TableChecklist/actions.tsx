import { ChecklistData } from "@/types/Checklist";
import { Row } from "@tanstack/react-table";
import DropdownActions from "./dropdown-actions";
import UpdateChecklistForm from "./update-checklist-form";
import { useState } from "react";

interface IActions {
  row: Row<ChecklistData>;
}

const Actions = ({ row }: IActions) => {
  const [openSheet, setOpenSheet] = useState<boolean>(false);

  const onOpen = () => setOpenSheet(true);
  const onClose = () => setOpenSheet(false);

  return (
    <>
      <DropdownActions row={row} onOpen={onOpen} />
      <UpdateChecklistForm row={row} open={openSheet} onClose={onClose}  />
    </>
  );
};

export default Actions;
