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
    alert(data.priority_uuid);
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

        <TextArea.Root error={errors.risk && errors.risk.message}>
          <Label htmlFor="risk" isOptional>Risk</Label>
          <TextArea.Input
            id="risk"
            placeholder="Eg: The lack of a schedule can compromise organization and deadlines."
            register={register("risk")}
          />
        </TextArea.Root>

        <Combobox.Root
          error={errors.priority_uuid && errors.priority_uuid.message}
        >
          <Label>Priority</Label>
          <Combobox.Input
            data={priorities}
            onSelect={(e) => {
              setValue("priority_uuid", e);
              trigger('priority_uuid')
            }}
            placeholder="Select a item priority"
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
