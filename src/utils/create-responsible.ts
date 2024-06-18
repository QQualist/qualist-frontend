import { getUserToken } from "./getUserToken";
import { api } from "@/api/api";
import { CreateResponsibleData } from "@/types/create-responsible";

export const createResponsible = async (data: CreateResponsibleData) => {
    const userToken = getUserToken();
    return await api.post(
        "/responsibles",
       {
        name: data.name,
        surname: data.surname,
        email: data.email,
        type_id: data.type_id,
        superior_uuid: data.superior_uuid,
        departament_uuid: data.departament_uuid
       },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
}