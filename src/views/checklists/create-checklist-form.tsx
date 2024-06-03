import { api } from "@/api/api";
import TextField from "@/components/Inputs/TextField";
import { Button } from "@/components/ui/button";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { UserContext } from "@/contexts/user";
import { CreateChecklistSchema } from "@/schemas/checklists/create-checklist";
import { ContextUser } from "@/types/ContextUser";
import { CreateChecklistData } from "@/types/create-checklist";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface ICreateChecklistForm {
  onClose: () => void;
}

const CreateChecklistForm = ({ onClose }: ICreateChecklistForm) => {
  const { user, SignOut } = useContext(UserContext) as ContextUser;
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateChecklistData>({
    resolver: zodResolver(CreateChecklistSchema),
  });

  const createChecklist = async (data: CreateChecklistData) => {
    return await api.post(
      "/checklists",
      {
        name: data.name,
        user_uuid: user?.uuid,
      },
      {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      }
    );
  };

  const mutation = useMutation({
    mutationFn: createChecklist,
    mutationKey: ['create-checklist'],
    onSuccess: ({data}) => {
      queryClient.setQueryData<CreateChecklistData[]>(
        ["checklists"],
        (oldData = []) => [data, ...oldData]
      );
      toast({
        variant: "success",
        title: "Success!",
        description: "Checklist successfully created",
      });
      navigate(`/checklist/${data.uuid}/items`);
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

  const sendForm = (data: CreateChecklistData) => {
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
        <DialogTitle>Create checklist</DialogTitle>
        <DialogDescription>
          Create your checklist here. Click save when you're finished.
        </DialogDescription>
      </DialogHeader>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(sendForm)}>
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

        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

export default CreateChecklistForm;
