import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Row } from "@tanstack/react-table";
import { useContext, useEffect } from "react";
import { UserContext } from "@/contexts/user";
import { ContextUser } from "@/types/ContextUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { isAxiosError } from "axios";
import { PriorityData } from "@/types/priority";
import { UpdatePriorityData } from "@/types/update-priority";
import { updatePrioritySchema } from "@/schemas/priorities/update-priority";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { api } from "@/api/api";
import { convertDayInSeconds } from "@/utils/convertDayInSeconds";
import TextField from "@/components/Inputs/TextField";
import { Label } from "@/components/ui/label";
import SelectColor from "../select-color";
import { convertSecondsInDay } from "@/utils/convertSecondsInDays";

interface IUpdatePriority {
  row: Row<PriorityData>;
  open: boolean;
  onClose: () => void;
}

const UpdatePriorityForm = ({ row, open, onClose }: IUpdatePriority) => {
  const { user, SignOut } = useContext(UserContext) as ContextUser;
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<UpdatePriorityData>({
    resolver: zodResolver(updatePrioritySchema),
    defaultValues: {
      name: row.getValue("name"),
      deadline: row.getValue("deadline"),
      color: row.getValue("color"),
    },
  });

  const updatePriority = async (data: UpdatePriorityData) => {
    return await api.patch(
      `/priorities/${row.getValue("uuid")}`,
      {
        name: data.name,
        deadline: convertDayInSeconds(data.deadline),
        color: data.color,
      },
      {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      }
    );
  };

  const mutation = useMutation({
    mutationFn: updatePriority,
    onSuccess: ({ data }) => {
      // Update data row tables
      row.original = { ...row.original, ...data };
      queryClient.invalidateQueries({ queryKey: ["priorities"] });
      toast({
        variant: "success",
        title: "Success!",
        description: "Priority successfully updated",
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
        "deadline",
        convertSecondsInDay(parseInt(row.getValue("deadline")))
      );
      setValue("color", row.getValue("color"));
    }
  }, [row, setValue]);

  const sendForm = (data: UpdatePriorityData) => {
    if (user && user.uuid) {
      mutation.mutateAsync(data);
    } else {
      SignOut();
    }
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update priority</DialogTitle>
          <DialogDescription>
            Update your priority here. Click save when you're finished.
          </DialogDescription>
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
            <SelectColor
            defaultValue={row.getValue('color')}
              onSelect={(color) => {
                setValue("color", color);
              }}
            />
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
    </Dialog>
  );
};

export default UpdatePriorityForm;
