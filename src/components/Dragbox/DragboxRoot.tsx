import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useTranslation } from "react-i18next";
import { useDroppable } from "@dnd-kit/core";
import DragboxCard from "./DragboxCard";
import { AuditedItemData } from "@/types/audited-item";
import { Badge } from "../ui/badge";

interface IDragboxRoot {
  id: string;
  title: string;
  items: AuditedItemData[];
}

const DragboxRoot = ({ title, items, id }: IDragboxRoot) => {
  const { t } = useTranslation();

  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <Card
      className={`w-full h-full bg-transparent overflow-hidden overflow-y-auto ${
        isOver && "border-2 border-light-blue"
      }`}
      ref={setNodeRef}
    >
      <div className="w-full h-max">
        <CardHeader className="flex flex-row items-baseline gap-2">
          <CardTitle>{t(title)}</CardTitle>
          <Badge
            variant="outline"
            className="flex items-center justify-center rounded-md font-semibold"
          >
            {items.length}
          </Badge>
        </CardHeader>
      </div>

      <CardContent className="w-full space-y-2">
        {items.map((item) => (
          <DragboxCard item={item} />
        ))}
      </CardContent>
    </Card>
  );
};

export default DragboxRoot;
