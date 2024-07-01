import React, { useEffect, useState } from "react";
import { Dragbox } from "@/components/Dragbox";
import { getAuditedItemsByAudit } from "@/utils/getAuditedItemsByAudit";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import {
  DndContext,
  DragOverlay,
  DragStartEvent,
  DragEndEvent,
} from "@dnd-kit/core";
import { AuditedItemData } from "@/types/audited-item";
import { ItemStatusData } from "@/types/item-status";

const AuditedItemDrags = () => {
  const { audit_uuid } = useParams();
  const navigate = useNavigate();

  const [auditedItems, setAuditedItems] = useState<AuditedItemData[]>([]);
  const [activeItemIds, setActiveItemIds] = useState<string[]>([]);

  const { data: audited_items = [] } = useQuery({
    queryKey: ["audited-items", audit_uuid],
    queryFn: () => {
      if (audit_uuid !== undefined) {
        return getAuditedItemsByAudit(audit_uuid);
      }
    },
    enabled: !!audit_uuid,
  });

  useEffect(() => {
    if (!audit_uuid) {
      navigate("/audits");
      return;
    }

    setAuditedItems(audited_items);

    return () => {
      setAuditedItems([]);
    };
  }, [audit_uuid, audited_items, navigate]);

  function handleDragStart(event: DragStartEvent) {
    setActiveItemIds([String(event.active.id)]);
  }

  function handleDragEnd(event: DragEndEvent) {
    const draggedItemId = String(event.active.id);
    const destinationListId = event.over?.id;

    if (!destinationListId) return;

    const updatedItems = auditedItems.map((item) => {
      if (item.uuid === draggedItemId) {
        switch (destinationListId) {
          case "planned-list":
            return { ...item, item_status: { id: 1 } as ItemStatusData };
          case "nonCompliant-list":
            return { ...item, item_status: { id: 2 } as ItemStatusData };
          case "notApplicable-list":
            return { ...item, item_status: { id: 4 } as ItemStatusData };
          default:
            return item;
        }
      }
      return item;
    });

    setAuditedItems(updatedItems);
    setActiveItemIds([]);
  }

  if (!audit_uuid) {
    return null;
  }

  console.log(auditedItems)

  return (
    <div className="w-full h-full flex gap-2">
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <Dragbox.Root
          id="planned-list"
          title="Compliant"
          items={auditedItems.filter((item) => item.item_status.id === 1)}
        />

        <Dragbox.Root
          id="nonCompliant-list"
          title="Non-compliant"
          items={auditedItems.filter((item) => item.item_status.id === 2)}
        />
        <Dragbox.Root
          id="notApplicable-list"
          title="Not applicable"
          items={auditedItems.filter((item) => item.item_status.id === 4)}
        />

        <DragOverlay>
          {activeItemIds.map((activeId) => (
            <Dragbox.Card
              key={activeId}
              item={auditedItems.find((item) => item.uuid === activeId)}
            />
          ))}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

export default AuditedItemDrags;
