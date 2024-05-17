import { UserSchema } from "@/schemas/users/User";
import { z } from "zod";

export type User = z.infer<typeof UserSchema>;