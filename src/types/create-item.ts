import { createItemSchema } from "@/schemas/items/create-item";
import { z } from "zod";

export type CreateItemData = z.infer<typeof createItemSchema>