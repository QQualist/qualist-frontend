import DateTimeInput from "@/components/Inputs/DateTime";
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
import { createAuditSchema } from "@/schemas/audit/create-audit";
import { ContextUser } from "@/types/ContextUser";
import { CreateAuditData } from "@/types/create-audit";
import { createAudit } from "@/utils/create-audit";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";

interface ICreateAuditForm {
  onClose: () => void;
}

const CreateAuditForm = ({ onClose }: ICreateAuditForm) => {
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
  } = useForm<CreateAuditData>({
    resolver: zodResolver(createAuditSchema),
    defaultValues: {
      date: new Date(),
    },
  });

  const mutation = useMutation({
    mutationFn: createAudit,
    mutationKey: ["create-audit"],
    onSuccess: ({ data }) => {
      queryClient.setQueryData<CreateAuditData[]>(
        ["audits"],
        (oldData = []) => [data, ...oldData]
      );
      toast({
        variant: "success",
        title: "Success!",
        description: "Audit successfully scheduled",
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

  const sendForm = (date: CreateAuditData) => {
    if (user && user.uuid) {
      mutation.mutateAsync(date);
    } else {
      SignOut();
    }
    reset();
    onClose();
  };

  const handleDateChange = (date: Date) => {
    setValue('date', date);
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Schedule audit</DialogTitle>
        <DialogDescription>
          Schedule your audit here. Click save when you're finished.
        </DialogDescription>
      </DialogHeader>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(sendForm)}>
        <TextField.Root error={errors.name && errors.name.message}>
          <Label htmlFor="audit-name">Name</Label>
          <TextField.Content>
            <TextField.Input
              id="audit-name"
              placeholder={"Eg: Process management - Phase 1"}
              type="text"
              register={register("name")}
            />
          </TextField.Content>
        </TextField.Root>

        <DateTimeInput
          id="audit-date"
          label="Date"
          value={watch("date")}
          onChange={handleDateChange}
          error={errors.date && errors.date.message}
        />

        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

export default CreateAuditForm;
