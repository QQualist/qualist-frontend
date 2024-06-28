import { UpdateRoleData } from "@/types/update-role";
import { getUserToken } from "./getUserToken";
import { api } from "@/api/api";

export const updateRole = async (uuid: string, data: UpdateRoleData) => {
    const userToken = getUserToken();

    return await api.patch(
        `/roles/${uuid}`,
        {
          name: data.name,
          canDispenseNonConformities: data.canDispenseNonConformities
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
}