import { api } from "@/api/api";
import { CreateDepartamentData } from "@/types/create-departament";
import { getUserToken } from "./getUserToken";

export const updateDepartament = async (uuid: string, data: CreateDepartamentData) => {
    const userToken = getUserToken();

    return await api.patch(
        `/departaments/${uuid}`,
        {
          name: data.name,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
}