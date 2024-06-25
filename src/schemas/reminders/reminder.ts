import { z } from "zod";

export const reminderSchema = z.object({
    id: z.number().int().positive(),
    name: z.string(),
    time: z.number().int().positive()
});