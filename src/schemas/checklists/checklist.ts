import { z } from "zod";

export const checklistSchema = z.object({
  uuid: z.string().uuid(),
  name: z.string(),
  user: z.object({
    user_uuid: z.string().uuid(),
    sendNonConformitiesToEmail: z.boolean(),
    roleCanDispenseNoConformity: z.boolean(),
  }),
  active: z.boolean(),
  version: z.number().int(),
  items: z.array(
    z.object({
      uuid: z.string().uuid(),
      description: z.string().max(255, "Description item is too long"),
      risk: z.string().max(255, "Description item is too long"),
      createdAt: z.date(),
      updatedAt: z.date(),
      deletedAt: z.date().nullable(),
    })
  ),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
});
