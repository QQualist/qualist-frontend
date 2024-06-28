import { Header } from "@/components/Layout/Header";
import CreateChecklistForm from "./create-checklist-form";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

const ChecklistHeader = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <Header.Root>
      <Header.Texts
        title="Checklists"
        subtitle="Access and manage checklists"
      />
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="default">Create checklist</Button>
        </DialogTrigger>
        <CreateChecklistForm onClose={closeDialog} />
      </Dialog>
    </Header.Root>
  );
};

export default ChecklistHeader;
