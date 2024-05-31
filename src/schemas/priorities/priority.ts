import { z } from "zod";

export const prioritySchema = z.object({
  uuid: z.string().uuid(),
  name: z
    .string()
    .min(1, "Priority name is required")
    .max(20, "Name is too long"),
  deadline: z.coerce.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
});
