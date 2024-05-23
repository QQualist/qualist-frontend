import { UpdateChecklistSchema } from "@/schemas/checklists/update-checklist";
import { z } from "zod";

export type UpdateChecklistData = z.infer<typeof UpdateChecklistSchema>;
