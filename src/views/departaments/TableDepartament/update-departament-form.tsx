import TextField from "@/components/Inputs/TextField";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { UserContext } from "@/contexts/user";
import { updateDepartamentSchema } from "@/schemas/departaments/update-departament";
import { ContextUser } from "@/types/ContextUser";
import { CreateDepartamentData } from "@/types/create-departament";
import { DepartamentData } from "@/types/departament";
import { updateDepartamentData } from "@/types/update-departament";
import { updateDepartament } from "@/utils/update-departament";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Row } from "@tanstack/react-table";
import { isAxiosError } from "axios";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

interface IUpdateDepartament {
  row: Row<DepartamentData>;
  open: boolean;
  onClose: () => void;
}

const UpdateDepartamentForm = ({ row, open, onClose }: IUpdateDepartament) => {
  const { user, SignOut } = useContext(UserContext) as ContextUser;
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<updateDepartamentData>({
    resolver: zodResolver(updateDepartamentSchema),
    defaultValues: {
      name: row.getValue("name"),
    },
  });

  const mutation = useMutation({
    mutationFn: (data: CreateDepartamentData) => {
      return updateDepartament(row.getValue("uuid"), data);
    },
    onSuccess: ({ data }) => {
      // Update data row tables
      row.original = { ...row.original, ...data };
      queryClient.invalidateQueries({ queryKey: ["departaments"] });
      toast({
        variant: "success",
        title: "Success!",
        description: "Departament successfully updated",
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

  const sendForm = (data: CreateDepartamentData) => {
    if (user && user.uuid) {
      mutation.mutateAsync(data);
    } else {
      SignOut();
    }
    reset();
    onClose();
  };

  useEffect(() => {
    if (row) {
      setValue("name", row.getValue("name"));
    }
  }, [row, setValue]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update departament</DialogTitle>
          <DialogDescription>
            Update your departament here. Click save when you're finished.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit(sendForm)}>
          <TextField.Root error={errors.name && errors.name.message}>
            <Label htmlFor="departament-name">Name</Label>
            <TextField.Content>
              <TextField.Input
                id="departament-name"
                placeholder={"Eg: Quality Assurance"}
                type="text"
                register={register("name")}
              />
            </TextField.Content>
          </TextField.Root>

          <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateDepartamentForm;
