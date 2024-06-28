import { Header } from "@/components/Layout/Header";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { getDepartament } from "@/utils/getDepartament";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CreateResponsibleForm from "./create-responsible-form";

const ResponsibleHeader = () => {
  const { departamentUuid } = useParams();
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const { data } = useQuery({
    queryKey: ["departaments"],
    queryFn: () => {
      if (departamentUuid !== undefined) {
        return getDepartament(departamentUuid);
      }
    },
  });

  if (!departamentUuid) {
    navigate("/departaments");
    return null;
  }

  return (
    <Header.Root>
      <Header.Texts
        title={`${data?.name}`}
        subtitle="Access and manage responsibles"
      />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="default">Create responsible</Button>
        </DialogTrigger>
        <CreateResponsibleForm onClose={closeDialog} />
      </Dialog>
    </Header.Root>
  );
};

export default ResponsibleHeader;
