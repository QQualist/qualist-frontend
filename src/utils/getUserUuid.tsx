import { User } from "@/types/User";

export const getUserUuid = (): string => {
  const userLocalStorage = localStorage.getItem("@AuthUser:user");

  if (!userLocalStorage) {
    throw new Error("User without token");
  }

  try {
    const user: User = JSON.parse(userLocalStorage);

    if (user && user.uuid) {
      return user.uuid;
    }else{
        throw new Error("UUID not found in user object");
    }
  } catch (error) {
    throw new Error("Parser user error");
  }
};
