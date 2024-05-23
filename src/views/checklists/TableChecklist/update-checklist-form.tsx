import { UpdateChecklistSchema } from "@/schemas/checklists/update-checklist";
import { UpdateChecklistData } from "@/types/update-checklist";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import TextField from "@/components/Inputs/TextField";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ChecklistData } from "@/types/Checklist";
import { Row } from "@tanstack/react-table";

interface IUpdateChecklist {
  row: Row<ChecklistData>;
  open: boolean;
  onClose: () => void;
}

const UpdateChecklistForm = ({ row, open, onClose }: IUpdateChecklist) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateChecklistData>({
    resolver: zodResolver(UpdateChecklistSchema),
    defaultValues: {
      name: row.getValue("name"),
      version: row.getValue("version"),
    },
  });

  const sendForm = (data: UpdateChecklistData) => {
    alert(data);
    reset();
  };

  return (
    <Sheet open={open}>
      <SheetContent onClose={onClose}>
        <SheetHeader>
          <SheetTitle>Update checklist</SheetTitle>
          <SheetDescription>
            Update your checklist here. Click save when you're finished.
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

          <TextField.Root error={errors.version && errors.version.message}>
            <Label htmlFor="checklist-version">Version</Label>
            <TextField.Content>
              <TextField.Input
                id="checklist-version"
                placeholder={"Eg: 2"}
                type="number"
                register={register("version")}
              />
            </TextField.Content>
          </TextField.Root>

          <SheetFooter>
            <Button type="submit">Save</Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default UpdateChecklistForm;
