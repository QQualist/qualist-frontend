import { z } from "zod";

export const riskTypeSchema = z.object({
  id: z.number(),
  name: z.string().max(35, "The risk type name is too long"),
});
