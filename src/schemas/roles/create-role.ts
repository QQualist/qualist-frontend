import { z } from "zod";

export const createRoleSchema = z.object({
  name: z
    .string()
    .min(1, "The name is required")
    .max(25, "Role name is too long"),
  canDispenseNonConformities: z.boolean().default(false),
});
