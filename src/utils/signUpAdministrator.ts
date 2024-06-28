import { api } from "@/api/api";
import { CreateAdministratorData } from "@/types/CreateAdministratorData";

export const signUpAdministrator = async (data: CreateAdministratorData) => {
  return await api.post("/users", {
    name: data.name,
    surname: data.surname,
    email: data.email,
    password: data.password,
    type_id: 1
  });
};
