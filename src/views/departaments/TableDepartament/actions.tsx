import { Row } from "@tanstack/react-table";
import DropdownActions from "./dropdown-actions";
import { useState } from "react";
import { DepartamentData } from "@/types/departament";
import UpdateDepartamentForm from "./update-departament-form";

interface IActions {
  row: Row<DepartamentData>;
}

const Actions = ({ row }: IActions) => {
  const [openSheet, setOpenSheet] = useState<boolean>(false);

  const onOpen = () => setOpenSheet(true);
  const onClose = () => setOpenSheet(false);

  return (
    <>
      <DropdownActions row={row} onOpen={onOpen} />
      <UpdateDepartamentForm row={row} open={openSheet} onClose={onClose}  />
    </>
  );
};

export default Actions;
