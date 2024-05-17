import { signInUserSchema } from "@/schemas/users/signInUser";
import { z } from "zod";

export type SignInUserData = z.infer<typeof signInUserSchema>;
