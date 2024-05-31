import { Row } from "@tanstack/react-table";
import { useState } from "react";
import { ItemData } from "@/types/item";
import DropdownActions from "./dropdown-actions";

interface IActions {
  row: Row<ItemData>;
}

const Actions = ({ row }: IActions) => {
  const [openSheet, setOpenSheet] = useState<boolean>(false);

  const onOpen = () => setOpenSheet(true);
  const onClose = () => setOpenSheet(false);

  return (
    <>
      <DropdownActions row={row} onOpen={onOpen} />
    </>
  );
};

export default Actions;
