import { auditReminderSchema } from "@/schemas/audit_reminder/audit-reminder";
import { z } from "zod";

export type AuditReminderData = z.infer<typeof auditReminderSchema>