import { Header } from "@/components/Layout/Header";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import CreateChecklistForm from "./create-checklist-form";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ChecklistHeader = () => {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  const openSheet = () => setIsSheetOpen(true);
  const closeSheet = () => setIsSheetOpen(false);

  return (
    <Header.Root>
      <Header.Texts
        title="Checklists"
        subtitle="Access and manage checklists"
      />
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="default">Create checklist</Button>
        </SheetTrigger>
        <CreateChecklistForm onClose={closeSheet} />
      </Sheet>
    </Header.Root>
  );
};

export default ChecklistHeader;
