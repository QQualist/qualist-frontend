import { ItemSchema } from "@/schemas/items/item";
import { z } from "zod";

export type ItemData = z.infer<typeof ItemSchema>