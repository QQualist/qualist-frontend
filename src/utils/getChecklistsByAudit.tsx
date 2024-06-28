import { api } from "@/api/api";
import { getUserToken } from "./getUserToken";
import { AuditedItemData } from "@/types/audited-item";

// Get all the audited items and groups them by checklists and according to the audit
export const getChecklistsByAudit = async (audit_uuid: string): Promise<AuditedItemData[]> => {
  const userToken = getUserToken();

  const audited_items = await api.get(`checklists/audits/${audit_uuid}`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
  console.log(audited_items.data);
  return audited_items.data;
};
