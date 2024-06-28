import { updateResponsibleSchema } from "@/schemas/responsible/update-responsible";
import { z } from "zod";

export type UpdateResponsibleData = z.infer<typeof updateResponsibleSchema>;