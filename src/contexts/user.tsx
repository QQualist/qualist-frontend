import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "@/api/api";
import { useToast } from "@/components/ui/use-toast";
import { ContextUser } from "@/types/ContextUser";
import { User } from "@/types/User";
import { Navigate } from "react-router-dom";

interface IUserProvider {
  children: ReactNode;
}

export const UserContext = createContext<ContextUser | Record<string, never>>(
  {}
);

export const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUser] = useState<User | null>(null);

  const { toast } = useToast();

  useEffect(() => {
    const loadStoreAuth = () => {
      const sessionUser = localStorage.getItem("@AuthUser:user");
      if (sessionUser) {
        setUser(JSON.parse(sessionUser));
      }
    };
    loadStoreAuth();
  }, []);

  const SignIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<void> => {
    return await api
      .post("/auth/login", {
        email,
        password,
      })
      .then(async ({ data }) => {
        await api
          .get("/auth/me", {
            headers: {
              Authorization: `Bearer ${data.access_token}`,
            },
          })
          .then((response) => {
            setUser({ ...response.data });
            localStorage.setItem(
              "@AuthUser:user",
              JSON.stringify({ ...response.data })
            );
          });
      })
      .catch(({ response }) => {
        toast({
          variant: "destructive",
          title: response.data.error,
          description: response.data.message,
        });
      });
  };

  const SignOut = () => {
    localStorage.removeItem("@AuthUser:user");
    setUser(null);
    return <Navigate to="/signin" />;
  };

  return (
    <UserContext.Provider value={{ user, signed: !!user, SignIn, SignOut }}>
      {children}
    </UserContext.Provider>
  );
};
