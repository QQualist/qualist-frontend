import { z } from "zod";

export const auditSchema = z.object({
  uuid: z.string().uuid(),
  name: z.string(),
  date: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
});
