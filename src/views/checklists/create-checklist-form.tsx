import TextField from "@/components/Inputs/TextField";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { CreateChecklistSchema } from "@/schemas/checklists/create-checklist";
import { CreateChecklistData } from "@/types/create-checklist";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface ICreateChecklistForm {
  onClose: () => void
}

const CreateChecklistForm = ({ onClose }: ICreateChecklistForm) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateChecklistData>({
    resolver: zodResolver(CreateChecklistSchema),
  });

  const sendForm = (data: CreateChecklistData) => {
    alert(data.name);
    reset();
    onClose()
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

        <SheetFooter >
            <Button type="submit">Save</Button>
        </SheetFooter>
      </form>
    </SheetContent>
  );
};

export default CreateChecklistForm;
