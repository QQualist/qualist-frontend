import { Header } from "@/components/Layout/Header";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { getDepartament } from "@/utils/getDepartament";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

const ResponsibleHeader = () => {
    const { departamentUuid } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation()
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

  console.log(data)

  return (
    <Header.Root>
      <Header.Texts title={`${data?.name}`} subtitle="Access and manage responsibles" />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="default">Create responsible</Button>
        </DialogTrigger>
        {/* <CreateItemForm onClose={closeDialog} /> */}
      </Dialog>
    </Header.Root>
  )
}

export default ResponsibleHeader