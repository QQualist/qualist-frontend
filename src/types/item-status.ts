import { ItemStatusSchema } from "@/schemas/item-status/item-status";
import { z } from "zod";

export type ItemStatusData = z.infer<typeof ItemStatusSchema>;
