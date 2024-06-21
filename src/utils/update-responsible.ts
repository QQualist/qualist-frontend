
import { UpdateResponsibleData } from "@/types/update-responsible";
import { getUserToken } from "./getUserToken";
import { api } from "@/api/api";


export const updateResponsible = async (uuid: string, data: UpdateResponsibleData) => {
    const userToken = getUserToken();

    return await api.patch(
        `/responsibles/${uuid}`,
        {
          name: data.name,
          surname: data.surname,
          email: data.email,
          type_id: data.type_id,
          role_uuid: data.role_uuid,
          superior_uuid: data.superior_uuid,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
}