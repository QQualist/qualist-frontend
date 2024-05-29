import { Header } from "@/components/Layout/Header";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CreateItemForm from "./create-item-form";

const ItemHeader = () => {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  const openSheet = () => setIsSheetOpen(true);
  const closeSheet = () => setIsSheetOpen(false);

  return (
    <Header.Root>
      <Header.Texts title="Items" subtitle="Access and manage items" />

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="default">Create item</Button>
        </SheetTrigger>
        <CreateItemForm onClose={closeSheet} />
      </Sheet>
    </Header.Root>
  );
};

export default ItemHeader;
