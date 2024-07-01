import { Card, CardContent } from "../ui/card";
import { useDraggable } from "@dnd-kit/core";
import { AuditedItemData } from "@/types/audited-item";
import { Badge } from "../ui/badge";

interface IDragboxCard {
  item?: AuditedItemData;
}

const DragboxCard = ({ item }: IDragboxCard) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: item?.uuid ?? "",
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  console.log(item);

  return (
    <Card
      className="h-max bg-background"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <CardContent className="flex h-max flex-col gap-4 px-2 py-3">
        <div className="flex items-center justify-between">
          <span className="text-base font-semibold">
            {item?.item.checklist.name}
          </span>
          <Badge className="rounded-full text-xs dark:text-white" style={{backgroundColor: item?.item.priority.color}}>
            {item?.item.priority.name}
          </Badge>
        </div>
        <span className="font-normal text-sm">{item?.item.description}</span>
      </CardContent>
    </Card>
  );
};

export default DragboxCard;
