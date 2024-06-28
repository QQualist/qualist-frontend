import { CreateRoleData } from "@/types/create-role";
import { getUserToken } from "./getUserToken";
import { api } from "@/api/api";

export const createRole = async (data: CreateRoleData) => {
    const userToken = getUserToken();

  return await api.post(
    "/roles",
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
};
