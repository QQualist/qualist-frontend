import { z } from "zod";

export const optionSchema = z.object({
  label: z.string(),
  value: z.string(),
  disable: z.boolean().optional(),
  badge: z.string().optional(),
});
