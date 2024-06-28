import { Row } from "@tanstack/react-table";
import { useState } from "react";
import DropdownActions from "./dropdown-actions";
import { PriorityData } from "@/types/priority";
import UpdatePriorityForm from "./update-priority-form";

interface IActions {
  row: Row<PriorityData>;
}

const Actions = ({ row }: IActions) => {
  const [openSheet, setOpenSheet] = useState<boolean>(false);

  const onOpen = () => setOpenSheet(true);
  const onClose = () => setOpenSheet(false);

  return (
    <>
      <DropdownActions row={row} onOpen={onOpen} />
      <UpdatePriorityForm row={row} open={openSheet} onClose={onClose} />
    </>
  );
};

export default Actions;
