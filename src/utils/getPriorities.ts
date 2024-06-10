import { api } from "@/api/api";
import { getUserToken } from "./getUserToken";
import { PriorityData } from "@/types/priority";

export const getPriorities = async (): Promise<PriorityData[]> => {
  const userToken = getUserToken();

  const priorities = await api.get(`/priorities`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
  

  return priorities.data
};
