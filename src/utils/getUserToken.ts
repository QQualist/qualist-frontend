import { User } from "@/types/User";

export const getUserToken = (): string => {
  const userLocalStorage = localStorage.getItem("@AuthUser:user");

  if (!userLocalStorage) {
    throw new Error("User without token");
  }

  try {
    const user: User = JSON.parse(userLocalStorage);

    if (user && user.token) {
      return user.token;
    }else{
        throw new Error("Token not found in user object");
    }
  } catch (error) {
    throw new Error("Parser user error");
  }
};
