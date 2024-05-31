import { updatePrioritySchema } from "@/schemas/priorities/update-priority";
import { z } from "zod";

export type UpdatePriorityData = z.infer<typeof updatePrioritySchema>;