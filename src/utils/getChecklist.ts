import { api } from "@/api/api";
import { ChecklistData } from "@/types/Checklist";
import { getUserToken } from "./getUserToken";

export const getChecklist = async (
  checklist_uuid: string
): Promise<ChecklistData> => {
  const userToken = getUserToken();

  const checklists = await api.get(`/checklists/${checklist_uuid}`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
  return checklists.data;
};
