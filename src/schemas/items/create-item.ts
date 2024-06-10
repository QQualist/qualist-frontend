import { z } from "zod";

export const createItemSchema = z.object({
  description: z
    .string()
    .min(1, "The description is required")
    .max(255, "The item description must contain a maximum of 50 characters"),
  risk: z
    .string()
    .max(255, "The item description must contain a maximum of 50 characters"),
  priority_uuid: z.string({
    required_error: "Priority is required"
  }).uuid().min(1, "Priority is required"),
  checklist_uuid: z.string({
    required_error: "Checklist is required"
  }).uuid().min(1, "Checklist is required"),
  risk_type_id: z.number().optional()
}).refine((data) => {
  if (data.risk && !data.risk_type_id) {
    return false;
  }
  return true;
}, {
  message: "Risk type is required when risk is provided",
  path: ["risk_type_id"]
})
