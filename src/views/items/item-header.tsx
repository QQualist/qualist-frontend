import { Header } from "@/components/Layout/Header";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CreateItemForm from "./create-item-form";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getChecklist } from "@/utils/getChecklist";
import { useTranslation } from "react-i18next";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

const ItemHeader = () => {
  const { checklistUuid } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation()
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const { data } = useQuery({
    queryKey: ["checklists"],
    queryFn: () => {
      if (checklistUuid !== undefined) {
        return getChecklist(checklistUuid);
      }
    },
  });

  if (!checklistUuid) {
    navigate("/checklists");
    return null;
  }

  return (
    <Header.Root>
      <Header.Texts title={`${t("Checklist")}: ${data?.name}`} subtitle="Access and manage items" />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="default">Create item</Button>
        </DialogTrigger>
        <CreateItemForm onClose={closeDialog} />
      </Dialog>
    </Header.Root>
  );
};

export default ItemHeader;
