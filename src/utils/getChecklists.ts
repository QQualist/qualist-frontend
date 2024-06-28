import { ChecklistData } from "@/types/Checklist";
import { getUserToken } from "./getUserToken";
import { api } from "@/api/api";

export const getChecklists = async (): Promise<ChecklistData[]> => {
  const userToken = getUserToken();

  const checklists = await api.get(`/checklists`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
  return checklists.data;
};
