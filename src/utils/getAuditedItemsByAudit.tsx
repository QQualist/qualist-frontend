import { AuditedItemData } from "@/types/audited-item";
import { getUserToken } from "./getUserToken";
import { api } from "@/api/api";

export const getAuditedItemsByAudit = async (audit_uuid: string): Promise<AuditedItemData[]> => {
    const userToken = getUserToken();
  
    const audited_items = await api.get(`audited-item/audits/${audit_uuid}`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
  
    return audited_items.data;
  };
