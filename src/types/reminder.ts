import { reminderSchema } from "@/schemas/reminders/reminder";
import { z } from "zod";

export type ReminderData = z.infer<typeof reminderSchema>;