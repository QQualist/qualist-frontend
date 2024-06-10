import { useState } from "react";
import { Button } from "@/components/ui/button";
import CreatePriorityForm from "./create-priority-form";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Header } from "@/components/Layout/Header";

const PriorityHeader = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <Header.Root>
      <Header.Texts
        title="Priorities"
        subtitle="Access and manage the possible priorities of your items"
      />
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="default">Create priority</Button>
        </DialogTrigger>
        <CreatePriorityForm onClose={closeDialog} />
      </Dialog>
    </Header.Root>
  );
};

export default PriorityHeader;
