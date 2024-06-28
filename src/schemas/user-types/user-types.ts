import { z } from "zod";

export const userTypesSchema = z.object({
  id: z.number(),
  name: z.string().max(20, "The user type name is too long"),
});
