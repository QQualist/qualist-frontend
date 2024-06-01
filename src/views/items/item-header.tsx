import { Header } from "@/components/Layout/Header";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CreateItemForm from "./create-item-form";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getChecklist } from "@/utils/getChecklist";
import { useTranslation } from "react-i18next";

const ItemHeader = () => {
  const { checklistUuid } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation()
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  const openSheet = () => setIsSheetOpen(true);
  const closeSheet = () => setIsSheetOpen(false);

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

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="default">Create item</Button>
        </SheetTrigger>
        <CreateItemForm onClose={closeSheet} />
      </Sheet>
    </Header.Root>
  );
};

export default ItemHeader;
