import { z } from "zod";
import { optionSchema } from "./option";

const isFutureDate = (date: Date) => {
  const now = new Date();
  return date >= now;
};

export const createAuditSchema = z.object({
  name: z
    .string()
    .min(1, "The name is required")
    .max(50, "The audit name must contain a maximum of 50 characters"),
  reminders: z.array(optionSchema).optional(),
  checklists: z.array(optionSchema).min(1, "Choose at least one checklist"),
  date: z.preprocess((arg) => {
    if (typeof arg === "string" || arg instanceof Date) {
      return new Date(arg);
    }
    return arg;
  }, z.date().refine(isFutureDate, "Date must be equal to or greater than the current date")),
});
