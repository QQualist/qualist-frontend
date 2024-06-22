import { AuditData } from "@/types/audit";
import { getUserToken } from "./getUserToken";
import { api } from "@/api/api";

export const getAudits = async (): Promise<AuditData[]> => {
  const userToken = getUserToken();

  const audits = await api.get(`/audits`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
  

  return audits.data
};
