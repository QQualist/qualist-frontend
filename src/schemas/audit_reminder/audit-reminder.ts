import { z } from "zod";
import { auditSchema } from "../audit/audit";
import { reminderSchema } from "../reminders/reminder";

export const auditReminderSchema = z.object({
  id: z.number().int().positive(),
  audit: auditSchema,
  reminder: reminderSchema,
});
