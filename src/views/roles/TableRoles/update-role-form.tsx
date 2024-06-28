import { Checkbox } from "@/components/Inputs/Checkbox";
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
import { updateRoleSchema } from "@/schemas/roles/update-role";
import { ContextUser } from "@/types/ContextUser";
import { RolesData } from "@/types/roles";
import { UpdateRoleData } from "@/types/update-role";
import { updateRole } from "@/utils/update-role";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Row } from "@tanstack/react-table";
import { isAxiosError } from "axios";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

interface IUpdateRole {
  row: Row<RolesData>;
  open: boolean;
  onClose: () => void;
}

const UpdateRoleForm = ({ row, open, onClose }: IUpdateRole) => {
  const { user, SignOut } = useContext(UserContext) as ContextUser;
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<UpdateRoleData>({
    resolver: zodResolver(updateRoleSchema),
    defaultValues: {
      name: row.getValue("name"),
      canDispenseNonConformities: row.getValue("canDispenseNonConformities"),
    },
  });

  const mutation = useMutation({
    mutationFn: (data: UpdateRoleData) => {
      return updateRole(row.getValue("uuid"), data);
    },
    onSuccess: ({ data }) => {
      // Update data row tables
      row.original = { ...row.original, ...data };
      queryClient.invalidateQueries({ queryKey: ["roles"] });
      toast({
        variant: "success",
        title: "Success!",
        description: "Role successfully updated",
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

  useEffect(() => {
    if (row) {
      setValue("name", row.getValue("name"));
      setValue(
        "canDispenseNonConformities",
        row.getValue("canDispenseNonConformities")
      );
    }
  }, [row, setValue]);

  const sendForm = (data: UpdateRoleData) => {
    if (user && user.uuid) {
      mutation.mutateAsync(data);
    } else {
      SignOut();
    }
    reset();
    onClose();
  };

  const handleCheckedChange = (value: boolean) => {
    setValue("canDispenseNonConformities", value);
  };

  const canDispenseNonConformities = watch("canDispenseNonConformities");

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update role</DialogTitle>
          <DialogDescription>
            Update your role here. Click save when you're finished.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit(sendForm)}>
        <TextField.Root error={errors.name && errors.name.message}>
          <Label htmlFor="name">Name</Label>
          <TextField.Content>
            <TextField.Input
              id="name"
              placeholder="Eg: Analyst"
              type="text"
              register={register("name")}
            />
          </TextField.Content>
        </TextField.Root>
        <Checkbox.Root
          error={
            errors.canDispenseNonConformities &&
            errors.canDispenseNonConformities.message
          }
        >
          <Checkbox.Input
            id="canDispenseNonConformities"
            checked={canDispenseNonConformities}
            onCheckedChange={handleCheckedChange}
            register={register("canDispenseNonConformities")}
          />
          <Checkbox.Label
            label="Can dispense a non-conformity?"
            text="This role has permission to waive a non-conformity"
          />
        </Checkbox.Root>
          <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateRoleForm;
