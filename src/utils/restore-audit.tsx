import { api } from "@/api/api";
import { getUserToken } from "./getUserToken";

export const restoreAudit = async (uuid: string) => {
  const userToken = getUserToken();

  return await api.patch(
    `/audits/restore/${uuid}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }
  );
};
