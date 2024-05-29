import { Combobox } from "@/components/Inputs/Combobox";
import { TextArea } from "@/components/Inputs/TextArea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { createItemSchema } from "@/schemas/items/create-item";
import { CreateItemData } from "@/types/create-item";
import { getPriorities } from "@/utils/getPriorities";
import { getRiskTypes } from "@/utils/getRiskTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

interface ICreateItemForm {
  onClose: () => void;
}

const CreateItemForm = ({ onClose }: ICreateItemForm) => {
  const {
    handleSubmit,
    setValue,
    reset,
    register,
    trigger,
    formState: { errors },
  } = useForm<CreateItemData>({
    resolver: zodResolver(createItemSchema),
  });

  const sendForm = (data: CreateItemData) => {
    alert("ENVIANDO DADOS");
    reset();
    onClose();
  };

  //Search and format priorities
  const { data: priorities = [] } = useQuery({
    queryKey: ["priorities"],
    queryFn: getPriorities,
    select: (data) =>
      data.map((priority) => ({
        value: priority.uuid,
        label: priority.name,
      })),
  });

  //Search and format risk types
  const { data: risk_types_data = [] } = useQuery({
    queryKey: ["risk-types"],
    queryFn: getRiskTypes,
    select: (data) =>
      data.map((risk_type) => ({
        value: risk_type.id,
        label: risk_type.name
          .toLowerCase()
          .replace(/\b\w/g, (char) => char.toUpperCase()),
      })),
  });

  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle>Create item</SheetTitle>
        <SheetDescription>
          Create your item here. Click save when you're finished.
        </SheetDescription>
      </SheetHeader>
      <form className="grid gap-4 py-4" onSubmit={handleSubmit(sendForm)}>
        <TextArea.Root error={errors.description && errors.description.message}>
          <Label htmlFor="description">Description</Label>
          <TextArea.Input
            id="description"
            placeholder="Eg: The document has a timeline section?"
            register={register("description")}
          />
        </TextArea.Root>

        <Combobox.Root
          error={errors.priority_uuid && errors.priority_uuid.message}
        >
          <Label>Priority</Label>
          <Combobox.Input
            data={priorities}
            onSelect={(e) => {
              setValue("priority_uuid", e as string);
              trigger("priority_uuid");
            }}
            placeholder="Select a item priority"
          />
        </Combobox.Root>

        <TextArea.Root error={errors.risk && errors.risk.message}>
          <Label htmlFor="risk" isOptional>
            Risk
          </Label>
          <TextArea.Input
            id="risk"
            placeholder="Eg: The lack of a schedule can compromise organization and deadlines."
            register={register("risk")}
          />
        </TextArea.Root>

        <Combobox.Root
          error={errors.risk_type_id && errors.risk_type_id.message}
        >
          <Label isOptional>Risk type</Label>
          <Combobox.Input
            data={risk_types_data}
            onSelect={(e) => {
              setValue("risk_type_id", e as number);
              trigger("risk_type_id");
            }}
            placeholder="Select a risk type"
          />
        </Combobox.Root>

        <SheetFooter>
          <Button type="submit">Save</Button>
        </SheetFooter>
      </form>
    </SheetContent>
  );
};

export default CreateItemForm;
