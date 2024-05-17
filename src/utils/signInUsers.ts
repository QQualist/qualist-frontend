import { api } from "@/api/api";
import { SignInUserData } from "@/types/SignInUserData";

export const signInUsers = async (data: SignInUserData) => {
  return await api.post("/auth/login", {
    email: data.email,
    password: data.password
  });
};
