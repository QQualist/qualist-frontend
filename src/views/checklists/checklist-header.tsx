import { Header } from "@/components/Layout/Header";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import CreateChecklistForm from "./create-checklist-form";
import { Button } from "@/components/ui/button";

const ChecklistHeader = () => {
  return (
    <Header.Root>
      <Header.Texts
        title="Checklists"
        subtitle="Access and manage checklists"
      />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="default">Create checklist</Button>
        </SheetTrigger>
        <CreateChecklistForm />
      </Sheet>
    </Header.Root>
  );
};

export default ChecklistHeader;
