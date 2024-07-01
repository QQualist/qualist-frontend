import { AuditData } from "@/types/audit";
import { getUserToken } from "./getUserToken";
import { api } from "@/api/api";

export const getAudit = async (audit_uuid: string): Promise<AuditData> => {
  const userToken = getUserToken();

  const audit = await api.get(`/audits/${audit_uuid}`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

  return audit.data;
};
