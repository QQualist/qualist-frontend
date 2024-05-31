import { api } from "@/api/api";
import { getUserToken } from "./getUserToken";
import { PriorityData } from "@/types/priority";
import { getUserUuid } from "./getUserUuid";

export const getPriorities = async (): Promise<PriorityData[]> => {
  const userToken = getUserToken();
  const userUuid = getUserUuid()

  const priorities = await api.get(`/priorities/user/${userUuid}`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
  

  return priorities.data
};
