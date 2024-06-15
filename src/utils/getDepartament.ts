import { api } from "@/api/api";
import { getUserToken } from "./getUserToken";
import { DepartamentData } from "@/types/departament";

export const getDepartament = async (
  departament_uuid: string
): Promise<DepartamentData> => {
  const userToken = getUserToken();

  const departament = await api.get(`/departaments/${departament_uuid}`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

  return departament.data;
};
