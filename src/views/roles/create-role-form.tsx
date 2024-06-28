import { Checkbox } from "@/components/Inputs/Checkbox";
import TextField from "@/components/Inputs/TextField";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { UserContext } from "@/contexts/user";
import { createRoleSchema } from "@/schemas/roles/create-role";
import { ContextUser } from "@/types/ContextUser";
import { CreateRoleData } from "@/types/create-role";
import { createRole } from "@/utils/create-role";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";

interface ICreateRoleForm {
  onClose: () => void;
}

const CreateRoleForm = ({ onClose }: ICreateRoleForm) => {
  const { user, SignOut } = useContext(UserContext) as ContextUser;
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const {
    handleSubmit,
    reset,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CreateRoleData>({
    resolver: zodResolver(createRoleSchema),
    defaultValues: {
      canDispenseNonConformities: false,
    },
  });

  const mutation = useMutation({
    mutationKey: ["roles"],
    mutationFn: createRole,
    onSuccess: ({ data }) => {
      queryClient.setQueryData<CreateRoleData[]>(
        ["roles"],
        (oldData = []) => [data, ...oldData]
      );
      toast({
        variant: "success",
        title: "Success!",
        description: "Role successfully created",
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

  const sendForm = (data: CreateRoleData) => {
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
    <DialogContent className="overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Create role</DialogTitle>
        <DialogDescription>
          Create your role here. Click save when you're finished.
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
  );
};

export default CreateRoleForm;
