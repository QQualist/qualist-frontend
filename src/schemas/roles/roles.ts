import { z } from "zod";

export const roleSchema = z.object({
  uuid: z.string().uuid(),
  name: z
    .string()
    .min(1, "The name is required")
    .max(25, "Role name is too long"),
  canDispenseNonConformities: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
});
