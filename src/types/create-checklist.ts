import { CreateChecklistSchema } from "@/schemas/checklists/create-checklist";
import { z } from "zod";

export type CreateChecklistData = z.infer<typeof CreateChecklistSchema>;
