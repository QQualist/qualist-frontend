
import { prioritySchema } from "@/schemas/priorities/priority";
import { z } from "zod";

export type PriorityData = z.infer<typeof prioritySchema>