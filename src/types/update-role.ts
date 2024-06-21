import { updateRoleSchema } from "@/schemas/roles/update-role";
import { z } from "zod";

export type UpdateRoleData = z.infer<typeof updateRoleSchema>;
