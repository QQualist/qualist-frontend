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
import { createPrioritySchema } from "@/schemas/priorities/create-priority";
import { CreatePriorityData } from "@/types/create-priority";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import SelectColor from "./select-color";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPriority } from "@/utils/createPriority";
import { useToast } from "@/components/ui/use-toast";
import { isAxiosError } from "axios";
import { useContext } from "react";
import { UserContext } from "@/contexts/user";
import { ContextUser } from "@/types/ContextUser";
import { colors } from "./colors";

interface ICreatePriorityForm {
  onClose: () => void;
}

const CreatePriorityForm = ({ onClose }: ICreatePriorityForm) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { user, SignOut } = useContext(UserContext) as ContextUser;

  const {
    handleSubmit,
    setValue,
    reset,
    register,
    formState: { errors },
  } = useForm<CreatePriorityData>({
    resolver: zodResolver(createPrioritySchema),
    defaultValues: {
      color: colors[0].value
    }
  });

  const mutation = useMutation({
    mutationKey: ["priorities"],
    mutationFn: createPriority,
    onSuccess: ({ data }) => {
      queryClient.setQueryData<CreatePriorityData[]>(
        ["priorities"],
        (oldData = []) => [data, ...oldData]
      );
      toast({
        variant: "success",
        title: "Success!",
        description: "Priority successfully created",
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

  const sendForm = (data: CreatePriorityData) => {
    if (user && user.uuid) {
      mutation.mutateAsync(data);
    } else {
      SignOut();
    }
    reset();
    onClose();
  };

  return (
    <DialogContent className="overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Create priority</DialogTitle>
        <DialogDescription>
          Create your priority here. Click save when you're finished.
        </DialogDescription>
        <span>{errors.deadline?.message}</span>
        <span>{errors.color?.message}</span>
      </DialogHeader>
      <form className="grid gap-4 py-4" onSubmit={handleSubmit(sendForm)}>
        <div className="w-full flex gap-2 items-end">
          <TextField.Root error={errors.name && errors.name.message}>
            <Label htmlFor="priority">Priority</Label>
            <TextField.Content>
              <TextField.Input
                id="priority"
                placeholder="Eg: High"
                type="text"
                register={register("name")}
              />
            </TextField.Content>
          </TextField.Root>
          <SelectColor onSelect={(color) => {
            setValue('color', color)
          }} />
        </div>
        <div className="w-full flex gap-2 items-end">
          <TextField.Root error={errors.deadline && errors.deadline.message}>
            <Label htmlFor="deadline">Deadline (in days)</Label>
            <TextField.Content>
              <TextField.Input
                id="deadline"
                placeholder="Eg: 10"
                type="number"
                register={register("deadline")}
              />
            </TextField.Content>
          </TextField.Root>
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

export default CreatePriorityForm;
