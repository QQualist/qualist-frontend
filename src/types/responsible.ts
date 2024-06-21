import { responsibleSchema } from "@/schemas/responsible/responsible";
import { z } from "zod";

export type ResponsibleData = z.infer<typeof responsibleSchema>;
