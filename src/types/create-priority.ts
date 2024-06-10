import { createPrioritySchema } from "@/schemas/priorities/create-priority";
import { z } from "zod";

export type CreatePriorityData = z.infer<typeof createPrioritySchema>;
