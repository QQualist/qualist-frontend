import { useState } from "react";
import { Header } from "@/components/Layout/Header";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import CreateDepartamentForm from "./create-departament-form";

const DepartamentHeader = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <Header.Root>
      <Header.Texts
        title="Departaments"
        subtitle="Access and manage departaments"
      />
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="default">Create departament</Button>
        </DialogTrigger>
        <CreateDepartamentForm onClose={closeDialog} />
      </Dialog>
    </Header.Root>
  );
};

export default DepartamentHeader;
