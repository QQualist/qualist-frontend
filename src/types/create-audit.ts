import { createAuditSchema } from "@/schemas/audit/create-audit";
import { z } from "zod";

export type CreateAuditData = z.infer<typeof createAuditSchema>;
