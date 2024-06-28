import { api } from "@/api/api";
import { CreateItemData } from "@/types/create-item";
import { getUserToken } from "./getUserToken";

export const createItem = async (data: CreateItemData) => {
    const userToken = getUserToken();

  return await api.post(
    "/items",
    {
      description: data.description,
      risk: data.risk,
      risk_type_id: data.risk_type_id,
      checklist_uuid: data.checklist_uuid,
      priority_uuid: data.priority_uuid,
    },
    {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }
  );
};
