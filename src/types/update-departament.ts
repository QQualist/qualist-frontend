import { updateDepartamentSchema } from "@/schemas/departaments/update-departament";
import { z } from "zod";

export type updateDepartamentData = z.infer<typeof updateDepartamentSchema>