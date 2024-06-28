import { Row } from "@tanstack/react-table";
import { useState } from "react";
import DropdownActions from "./dropdown-actions";
import { ResponsibleData } from "@/types/responsible";
import UpdateResponsibleForm from "./update-responsible-form";

interface IActions {
  row: Row<ResponsibleData>;
}

const Actions = ({ row }: IActions) => {
  const [openSheet, setOpenSheet] = useState<boolean>(false);

  const onOpen = () => setOpenSheet(true);
  const onClose = () => setOpenSheet(false);

  return (
    <>
      <DropdownActions row={row} onOpen={onOpen} />
      <UpdateResponsibleForm row={row} open={openSheet} onClose={onClose} />
    </>
  );
};

export default Actions;
