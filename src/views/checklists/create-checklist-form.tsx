import TextField from "@/components/Inputs/TextField";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const CreateChecklistForm = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Create checklist</SheetTitle>
        <SheetDescription>
          Create your checklist here. Click save when you're finished.
        </SheetDescription>
      </SheetHeader>
      <form className="grid gap-4 py-4">
        <TextField.Root error="Erro">
          <Label htmlFor="checklist-name">Name</Label>
          <TextField.Content>
            <TextField.Input
              id="checklist-name"
              placeholder={"Eg: Project plan"}
              type="text"
            />
          </TextField.Content>
        </TextField.Root>

        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save</Button>
          </SheetClose>
        </SheetFooter>
      </form>
    </SheetContent>
  );
};

export default CreateChecklistForm;
