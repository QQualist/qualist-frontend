import { z } from "zod";

export const UserSchema = z.object({
  uuid: z.string().uuid(),
  isAdmin: z.boolean(),
  name: z
    .string()
    .min(1, "The name is required")
    .max(30, "The name must contain a maximum of 30 characters"),
  surname: z
    .string({ required_error: "The surname is required" })
    .min(1, "The surname is required")
    .max(50, "The surname must contain a maximum of 50 characters"),
  email: z
    .string({ required_error: "The email is required" })
    .email("Invalid email")
    .min(1, "Email is required")
    .max(60, "The email must contain a maximum of 60 characters"),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
});
