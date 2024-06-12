import { createDepartamentSchema } from "@/schemas/departaments/create-departament";
import { z } from "zod";

export type CreateDepartamentData = z.infer<typeof createDepartamentSchema>