import { Row } from "@tanstack/react-table";
import DropdownActions from "./dropdown-actions";
import { useState } from "react";
import { RolesData } from "@/types/roles";
import UpdateRoleForm from "./update-role-form";

interface IActions {
  row: Row<RolesData>;
}

const Actions = ({ row }: IActions) => {
  const [openSheet, setOpenSheet] = useState<boolean>(false);

  const onOpen = () => setOpenSheet(true);
  const onClose = () => setOpenSheet(false);

  return (
    <>
      <DropdownActions row={row} onOpen={onOpen} />
      <UpdateRoleForm row={row} open={openSheet} onClose={onClose}  />
    </>
  );
};

export default Actions;
