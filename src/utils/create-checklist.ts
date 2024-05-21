import { api } from "@/api/api";
import { CreateChecklistData } from "@/types/create-checklist";

export const CreateChecklist = async (data: CreateChecklistData, token: string) => {
  return await api.post("/checklists", {
    name: data.name,
  }, {
    headers: {
        'Authorization': `Bearer ${token}`
    }
  });
};
