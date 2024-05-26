import { z } from "zod";

export const createItemSchema = z.object({
  description: z
    .string()
    .min(1, "The name is required")
    .max(255, "The item description must contain a maximum of 50 characters"),
  risk: z
    .string()
    .max(255, "The item description must contain a maximum of 50 characters"),
  checklist_uuid: z.string().uuid(),
  priority_uuid: z.string({
    required_error: "Priority is required"
  }).uuid().min(1, "Priority is required"),
  risk_type_uuid: z.string().uuid(),
});
