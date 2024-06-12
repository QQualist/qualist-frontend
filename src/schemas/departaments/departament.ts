import { z } from "zod";

export const departamentSchema = z.object({
  uuid: z.string().uuid(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
});
