import TextField from "@/components/Inputs/TextField";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { UserContext } from "@/contexts/user";
import { createDepartamentSchema } from "@/schemas/departaments/create-departament";
import { ContextUser } from "@/types/ContextUser";
import { CreateDepartamentData } from "@/types/create-departament";
import { createDepartament } from "@/utils/createDepartament";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";

interface ICreateDepartamentForm {
  onClose: () => void;
}

const CreateDepartamentForm = ({ onClose }: ICreateDepartamentForm) => {
  const { user, SignOut } = useContext(UserContext) as ContextUser
  const queryClient = useQueryClient();
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateDepartamentData>({
    resolver: zodResolver(createDepartamentSchema),
  });

  const mutation = useMutation({
    mutationFn: createDepartament,
    mutationKey: ['create-departament'],
    onSuccess: ({data}) => {
      queryClient.setQueryData<CreateDepartamentData[]>(
        ["departaments"],
        (oldData = []) => [data, ...oldData]
      );
      toast({
        variant: "success",
        title: "Success!",
        description: "Departament successfully created",
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

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create departament</DialogTitle>
        <DialogDescription>
          Create your departament here. Click save when you're finished.
        </DialogDescription>
      </DialogHeader>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(sendForm)}>
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
  );
};

export default CreateDepartamentForm;
