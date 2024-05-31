import { z } from "zod";
import { riskTypeSchema } from "../risk-types/risk-types";
import { checklistSchema } from "../checklists/checklist";
import { prioritySchema } from "../priorities/priority";

export const ItemSchema = z.object({
    uuid: z.string().uuid(),
    description: z.string().max(255, 'Description item is too long'),
    risk: z.string().max(255, 'Description item is too long'),
    createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
  risk_type: riskTypeSchema,
  checklist: checklistSchema,
  priority: prioritySchema
})