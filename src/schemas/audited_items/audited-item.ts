import { z } from "zod";
import { ItemSchema } from "../items/item";
import { ItemStatusSchema } from "../item-status/item-status";

export const auditedItemSchema = z.object({
  uuid: z.string().uuid(),
  item: ItemSchema,
  item_status: ItemStatusSchema,
});
