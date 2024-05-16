import { createAdministratorSchema } from "@/schemas/users/createAdministrator";
import { z } from "zod";

export type CreateAdministratorData = z.infer<typeof createAdministratorSchema>;