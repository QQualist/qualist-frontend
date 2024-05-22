import { checklistSchema } from "@/schemas/checklists/checklist";
import { z } from "zod";

export type ChecklistData = z.infer<typeof checklistSchema>