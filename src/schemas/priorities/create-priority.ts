import { z } from "zod";

const isValidHexColor = (color: string) => /^#[0-9A-F]{6}$/i.test(color);

export const createPrioritySchema = z.object({
  name: z
    .string()
    .min(1, "Priority name is required")
    .max(20, "Priority name is too long"),
  deadline: z.coerce.number().positive().int(),
  color: z
    .string()
    .min(1, "Color is required")
    .max(7, "Hex color is too long")
    .refine((color) => isValidHexColor(color), {
      message: "Invalid hexadecimal color format",
    }),
});
