import { z } from "zod";

export const createDepartamentSchema = z.object({
  name: z
    .string()
    .min(1, "The name is required")
    .max(35, "The departament name must contain a maximum of 35 characters"),
});
