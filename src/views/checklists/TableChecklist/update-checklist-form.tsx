import { UpdateChecklistSchema } from "@/schemas/checklists/update-checklist";
import { UpdateChecklistData } from "@/types/update-checklist";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import TextField from "@/components/Inputs/TextField";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ChecklistData } from "@/types/Checklist";
import { Row } from "@tanstack/react-table";
import { api } from "@/api/api";
import { useContext } from "react";
import { UserContext } from "@/contexts/user";
import { ContextUser } from "@/types/ContextUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { isAxiosError } from "axios";

interface IUpdateChecklist {
  row: Row<ChecklistData>;
  open: boolean;
  onClose: () => void;
}

const UpdateChecklistForm = ({ row, open, onClose }: IUpdateChecklist) => {
  const { user, SignOut } = useContext(UserContext) as ContextUser;
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateChecklistData>({
    resolver: zodResolver(UpdateChecklistSchema),
    defaultValues: {
      name: row.getValue("name"),
      version: row.getValue("version"),
    },
  });

  const updateChecklist = async (data: UpdateChecklistData) => {
    return await api.patch(
      `/checklists/${row.getValue("uuid")}`,
      {
        name: data.name,
        version: data.version,
      },
      {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      }
    );
  };

  const mutation = useMutation({
    mutationFn: updateChecklist,
    onSuccess: ({ data }) => {
      // Update data row tables
      row.original = { ...row.original, ...data };
      queryClient.invalidateQueries();
      toast({
        variant: "success",
        title: "Success!",
        description: "Checklist successfully updated",
      });
    },
    onError: (error) => {
      if (isAxiosError(error) && error.response) {
        toast({
          variant: "destructive",
          title: `Ops!`,
          description: error.response.data.message,
        });
      } else {
        toast({
          variant: "destructive",
          title: `Ops!`,
          description: `An error occurred: ${error.message}`,
        });
      }
    },
  });

  const sendForm = (data: UpdateChecklistData) => {
    if (user && user.uuid) {
      mutation.mutateAsync(data);
    } else {
      SignOut();
    }
    reset();
    onClose();
  };

  return (
    <Sheet open={open}>
      <SheetContent onClose={onClose}>
        <SheetHeader>
          <SheetTitle>Update checklist</SheetTitle>
          <SheetDescription>
            Update your checklist here. Click save when you're finished.
          </SheetDescription>
        </SheetHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit(sendForm)}>
          <TextField.Root error={errors.name && errors.name.message}>
            <Label htmlFor="checklist-name">Name</Label>
            <TextField.Content>
              <TextField.Input
                id="checklist-name"
                placeholder={"Eg: Project plan"}
                type="text"
                register={register("name")}
              />
            </TextField.Content>
          </TextField.Root>

          <TextField.Root error={errors.version && errors.version.message}>
            <Label htmlFor="checklist-version">Version</Label>
            <TextField.Content>
              <TextField.Input
                id="checklist-version"
                placeholder={"Eg: 2"}
                type="number"
                register={register("version")}
              />
            </TextField.Content>
          </TextField.Root>

          <SheetFooter>
            <Button type="submit">Save</Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default UpdateChecklistForm;
