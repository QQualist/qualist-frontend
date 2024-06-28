import { auditSchema } from "@/schemas/audit/audit";
import { z } from "zod";

export type AuditData = z.infer<typeof auditSchema>;
