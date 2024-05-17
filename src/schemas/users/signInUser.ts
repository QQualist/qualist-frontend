import { z } from "zod";

export const signInUserSchema = z.object({
  email: z
    .string({ required_error: "The email is required" })
    .email("Invalid email")
    .min(1, 'Email is required')
    .max(60, "The email must contain a maximum of 60 characters"),
  password: z
    .string({ required_error: "The password is required" })
    .min(1, "Email is required")
    .min(8, "The password must be a minimum of 8 characters"),
});
