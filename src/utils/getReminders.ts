import { ReminderData } from "@/types/reminder";
import { getUserToken } from "./getUserToken";
import { api } from "@/api/api";

export const getReminders = async (): Promise<ReminderData[]> => {
  const userToken = getUserToken();

  const reminders = await api.get(`/reminders`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

  return reminders.data;
};
