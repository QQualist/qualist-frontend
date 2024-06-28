import { RolesData } from "@/types/roles";
import { getUserToken } from "./getUserToken";
import { api } from "@/api/api";

export const getRoles = async (): Promise<RolesData[]> => {
  const userToken = getUserToken();

  const roles = await api.get(`/roles`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
  

  return roles.data
};
