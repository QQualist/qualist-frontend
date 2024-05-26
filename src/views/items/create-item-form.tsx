import { Combobox } from "@/components/Inputs/Combobox";
import { Button } from "@/components/ui/button";
import {
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { createItemSchema } from "@/schemas/items/create-item";
import { CreateItemData } from "@/types/create-item";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface ICreateItemForm {
  onClose: () => void;
}

const priorities = [
  { value: "2a347288-6bc8-4731-a189-178ff43f365a", label: "Low" },
  { value: "3fa407f9-3c71-48bd-9969-5fe2653c1bf8", label: "Medium" },
  { value: "5c51d8c3-ec6a-4032-95d0-fbe28f45fdb0", label: "High" },
];

const CreateItemForm = ({ onClose }: ICreateItemForm) => {
  const {
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<CreateItemData>({
    resolver: zodResolver(createItemSchema),
  });

  const sendForm = (data: CreateItemData) => {
    alert(data.priority_uuid);
    reset();
    onClose();
  };

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Create checklist</SheetTitle>
        <SheetDescription>
          Create your checklist here. Click save when you're finished.
        </SheetDescription>
      </SheetHeader>
      <form className="grid gap-4 py-4" onSubmit={handleSubmit(sendForm)}>
        
        <Combobox.Root error={errors.priority_uuid && errors.priority_uuid.message}>
          <Combobox.Input
            data={priorities}
            onSelect={(e) => setValue("priority_uuid", e)}
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
