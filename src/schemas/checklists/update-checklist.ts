import { z } from "zod";

export const UpdateChecklistSchema = z.object({
  name: z
    .string()
    .min(1, "The name is required")
    .max(50, "The checklist name must contain a maximum of 50 characters"),
  version: z.coerce
    .number()
    .int()
    .positive()
    .min(1, "The number must be greater than 1"),
});
