import { z } from "zod";

const isValidHexColor = (color: string) => /^#[0-9A-F]{6}$/i.test(color);

export const prioritySchema = z.object({
  uuid: z.string().uuid(),
  name: z
    .string()
    .min(1, "Priority name is required")
    .max(20, "Name is too long"),
  deadline: z.coerce.number().int(),
  color: z
    .string()
    .min(1, "Color is required")
    .max(7, "Hex color is too long")
    .refine((color) => isValidHexColor(color), {
      message: "Invalid hexadecimal color format",
    }),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
});
