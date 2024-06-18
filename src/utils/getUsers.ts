import { api } from "@/api/api";
import { getUserToken } from "./getUserToken";
import { User } from "@/types/User";

export const getUsers = async (): Promise<User[]> => {
  const userToken = getUserToken();

  const users = await api.get(`/users`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
  

  return users.data
};
