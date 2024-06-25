import { useContext } from "react";
import { UserContext } from "../contexts/user";
import { ContextUser } from "../types/ContextUser";
import { Navigate, Outlet } from "react-router-dom";
import NotificationsProvider from "@/contexts/notifications";

const PrivateRoutes = () => {
  const { signed } = useContext(UserContext) as ContextUser;

  return signed ? (
    <NotificationsProvider>
      <Outlet />
    </NotificationsProvider>
  ) : (
    <Navigate to="/home" />
  );
};

export default PrivateRoutes;
