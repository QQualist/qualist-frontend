import { useState } from "react";
import { Button } from "@/components/ui/button";
import CreatePriorityForm from "./create-priority-form";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Header } from "@/components/Layout/Header";

const PriorityHeader = () => {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  const openSheet = () => setIsSheetOpen(true);
  const closeSheet = () => setIsSheetOpen(false);

  return (
    <Header.Root>
      <Header.Texts
        title="Priorities"
        subtitle="Access and manage the possible priorities of your items"
      />
      <Dialog open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <DialogTrigger asChild>
          <Button variant="default">Create priority</Button>
        </DialogTrigger>
        <CreatePriorityForm onClose={closeSheet} />
      </Dialog>
    </Header.Root>
  );
};

export default PriorityHeader;
