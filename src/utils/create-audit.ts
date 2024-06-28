import { CreateAuditData } from "@/types/create-audit";
import { getUserToken } from "./getUserToken";
import { api } from "@/api/api";

export const createAudit = async (data: CreateAuditData) => {
  const userToken = getUserToken();

  const checklists = data.checklists.map(checklist => checklist.value)

  //Transform data reminders
  const reminders = data.reminders
    ? data.reminders.map((reminder) => ({
        reminder_id: parseInt(reminder.value),
      }))
    : [];

  return await api.post(
    "/audits",
    {
      name: data.name,
      date: data.date,
      reminders: reminders,
      checklists: checklists,
    },
    {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }
  );
};
