import { api } from "@/api/api";
import { getUserToken } from "./getUserToken";
import { UserTypesData } from "@/types/user-types";

export const getUserTypes = async (): Promise<UserTypesData[]> => {
  const userToken = getUserToken();

  const user_types = await api.get(`/user-types`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

  return user_types.data;
};
