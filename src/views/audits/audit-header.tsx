import { Header } from "@/components/Layout/Header";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

const AuditHeader = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <Header.Root>
      <Header.Texts
        title="Audits"
        subtitle="Access and manage audits"
      />
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="default">Schedule audit</Button>
        </DialogTrigger>
        {/* <CreateChecklistForm onClose={closeDialog} /> */}
      </Dialog>
    </Header.Root>
  );
};

export default AuditHeader;
