import DateTimeInput from "@/components/Inputs/DateTime";
import { MultiSelector } from "@/components/Inputs/MultiSelector";
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
import { getReminders } from "@/utils/getReminders";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface ICreateAuditForm {
  onClose: () => void;
}

const CreateAuditForm = ({ onClose }: ICreateAuditForm) => {
  const { user, SignOut } = useContext(UserContext) as ContextUser;
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { t } = useTranslation();

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

  const {
    data = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["reminders"],
    queryFn: getReminders,
    select: (data) =>
      data.map((reminder) => ({
        value: String(reminder.id),
        label: reminder.name,
      })),
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
    setValue("date", date);
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

        <MultiSelector.Root error={undefined}>
          <Label htmlFor="reminders">Reminders</Label>
          <MultiSelector.Input
            onChange={(e) => {
              setValue('reminders', e);
            }}
            maxSelected={3}
            onMaxSelected={(maxLimit) => {
              toast({
                title: `${t(
                  "You have reached your reminder limit"
                )}: ${maxLimit}`,
              });
            }}
            defaultOptions={data}
            placeholder="I want to be notified at"
            emptyIndicator={
              <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                no results found.
              </p>
            }
          />
        </MultiSelector.Root>

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
