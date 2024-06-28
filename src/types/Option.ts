import { optionSchema } from "@/schemas/audit/option";
import { z } from "zod";

export type Option = z.infer<typeof optionSchema>;
