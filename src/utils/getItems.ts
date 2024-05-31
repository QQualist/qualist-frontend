import { ItemData } from "@/types/item";
import { getUserToken } from "./getUserToken";
import { api } from "@/api/api";

export const getItems = async (checklist_uuid: string): Promise<ItemData[]> => {
  const userToken = getUserToken();

  const items = await api.get(`/items/checklist/${checklist_uuid}`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

  return items.data;
};
