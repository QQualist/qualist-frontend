import { createRoleSchema } from "@/schemas/roles/create-role";
import { z } from "zod";

export type CreateRoleData = z.infer<typeof createRoleSchema>;
