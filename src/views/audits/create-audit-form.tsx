import DateTimeInput from "@/components/Inputs/DateTime";
import { MultipleSelector } from "@/components/Inputs/MultipleSelector";
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
import { Option } from "@/types/Option";
import { CreateAuditData } from "@/types/create-audit";
import { createAudit } from "@/utils/create-audit";
import { getChecklists } from "@/utils/getChecklists";
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
    data: reminders = [],
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

  const {
    data: checklists = [],
    error: checklistError,
    isLoading: checklistsIsLoading,
  } = useQuery({
    queryKey: ["checklists"],
    queryFn: getChecklists,
    select: (data) => {
      // Filter checklists with and without items and only active ones
      const checklistsWithItems = data.filter(
        (checklist) => checklist.items.length > 0 && checklist.active
      );
      const checklistsWithoutItems = data.filter(
        (checklist) => checklist.items.length === 0 && checklist.active
      );

      // Sort each group alphabetically
      checklistsWithItems.sort((a, b) => a.name.localeCompare(b.name));
      checklistsWithoutItems.sort((a, b) => a.name.localeCompare(b.name));

      // Map and structure the array as desired
      const mappedChecklists = [
        ...checklistsWithItems.map((checklist) => ({
          value: String(checklist.uuid),
          label: `${checklist.name}`,
          badge: undefined,
          disable: false,
        })),
        ...checklistsWithoutItems.map((checklist) => ({
          value: String(checklist.uuid),
          label: `${checklist.name}`,
          badge: "No items",
          disable: true,
        })),
      ];

      return mappedChecklists;
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
    setValue("date", date);
  };

  const handleChecklistsSelect = (selectedOptions: Option[]) => {
    setValue("checklists", selectedOptions);
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

        <MultipleSelector.Root
          error={errors.checklists && errors.checklists.message}
        >
          <Label htmlFor="checklists">Checklists</Label>
          <MultipleSelector.Input
            options={checklists}
            placeholder="Chose the checklists"
            emptyText="No checklist found"
            onSelect={handleChecklistsSelect}
          />
        </MultipleSelector.Root>

        <MultipleSelector.Root error={undefined}>
          <Label htmlFor="reminders" isOptional>Reminders</Label>
          <MultipleSelector.Input
            options={reminders}
            onSelect={(e) => {
              setValue("reminders", e);
            }}
            maxSelections={3}
            onMaxSelectionReached={(maxLimit) => {
              toast({
                title: `${t(
                  "You have reached your reminder limit"
                )}: ${maxLimit}`,
              });
            }}
            placeholder="I want to be notified at"
            emptyText="No reminders found."
          />
        </MultipleSelector.Root>

        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

export default CreateAuditForm;
