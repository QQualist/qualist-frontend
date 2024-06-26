import { getUserToken } from "./getUserToken";
import { api } from "@/api/api";
import { AuditReminderData } from "@/types/audit-reminder";

export const getRemindersByAudit = async (audit_uuid: string): Promise<AuditReminderData[]> => {
  const userToken = getUserToken();

  const audit_reminders = await api.get(`audit-reminders/audits/${audit_uuid}`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
  return audit_reminders.data;
};
