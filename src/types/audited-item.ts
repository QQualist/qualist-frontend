import { auditedItemSchema } from "@/schemas/audited_items/audited-item";
import { z } from "zod";

export type AuditedItemData = z.infer<typeof auditedItemSchema>;
