import { CreateAuditData } from "@/types/create-audit";
import { getUserToken } from "./getUserToken";
import { api } from "@/api/api";

export const createAudit = async (data: CreateAuditData) => {
    const userToken = getUserToken();
    return await api.post(
        "/audits",
       {
        name: data.name,
        date: data.date
       },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
}