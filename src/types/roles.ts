import { roleSchema } from "@/schemas/roles/roles";
import { z } from "zod";

export type RolesData = z.infer<typeof roleSchema>;