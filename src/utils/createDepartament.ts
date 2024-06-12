
import { getUserToken } from "./getUserToken";
import { api } from "@/api/api";
import { CreateDepartamentData } from "@/types/create-departament";


export const createDepartament = async (data: CreateDepartamentData) => {
    const userToken = getUserToken();

    return await api.post(
        "/departaments",
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