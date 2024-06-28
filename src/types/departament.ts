import { departamentSchema } from "@/schemas/departaments/departament";
import { z } from "zod";

export type DepartamentData = z.infer<typeof departamentSchema>