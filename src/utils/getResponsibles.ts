import { api } from "@/api/api";
import { getUserToken } from "./getUserToken";
import { ResponsibleData } from "@/types/responsible";

export const getResponsibles = async (
  departament_uuid: string
): Promise<ResponsibleData[]> => {
  const userToken = getUserToken();

  const responsibles = await api.get(
    `/responsibles/departament/${departament_uuid}`,
    {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }
  );

  return responsibles.data;
};
