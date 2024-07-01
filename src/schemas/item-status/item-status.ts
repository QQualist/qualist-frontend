import { z } from "zod";

export const ItemStatusSchema = z.object({
  id: z.number().int().positive(),
  name: z.string(),
});
