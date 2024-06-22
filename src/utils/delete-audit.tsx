import { api } from "@/api/api";
import { getUserToken } from "./getUserToken";

export const deleteAudit = async (uuid: string) => {
  const userToken = getUserToken();
  return await api.delete(
    `/audits/${uuid}`,
    {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }
  );
};
