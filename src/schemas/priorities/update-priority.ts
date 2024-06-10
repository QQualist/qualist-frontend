import { z } from "zod";

const isValidHexColor = (color: string) => /^#[0-9A-F]{6}$/i.test(color);

export const updatePrioritySchema = z.object({
  name: z
    .string()
    .min(1, "Priority name is required")
    .max(20, "The name of the priority must contain a maximum of 20 characters"),
  deadline: z.coerce.number().positive().int(),
  color: z
    .string()
    .min(1, "Color is required")
    .max(7, "Hex color is too long")
    .refine((color) => isValidHexColor(color), {
      message: "Invalid hexadecimal color format",
    }),
});
