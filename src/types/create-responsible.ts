import { createResponsibleSchema } from "@/schemas/responsible/create-responsible";
import { z } from "zod";

export type CreateResponsibleData = z.infer<typeof createResponsibleSchema>;
