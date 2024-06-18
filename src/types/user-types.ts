import { userTypesSchema } from "@/schemas/user-types/user-types";
import { z } from "zod";

export type UserTypesData = z.infer<typeof userTypesSchema>;