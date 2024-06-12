import { DepartamentData } from "@/types/departament";
import { getUserToken } from "./getUserToken";
import { api } from "@/api/api";

export const getDepartaments = async (): Promise<DepartamentData[]> => {
    const userToken = getUserToken();

    const departaments = await api.get(`/departaments`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    return departaments.data;
}