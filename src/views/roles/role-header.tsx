import { Header } from "@/components/Layout/Header";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const RoleHeader = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <Header.Root>
      <Header.Texts
        title="Roles"
        subtitle="Access and manage roles"
      />
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="default">Create role</Button>
        </DialogTrigger>
        {/* <CreatePriorityForm onClose={closeDialog} /> */}
      </Dialog>
    </Header.Root>
  );
};

export default RoleHeader;
