import { z } from "zod";

export const createResponsibleSchema = z.object({
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
  departament_uuid: z.string().uuid(),
  type_id: z.number().int().positive(),
  role_uuid: z.string().uuid(),
  superior_uuid: z.string().uuid().optional()
})