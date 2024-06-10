import { useContext } from "react";
import { UserContext } from "../contexts/user";
import { ContextUser } from "../types/ContextUser";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const { signed } = useContext(UserContext) as ContextUser;

  return signed ? <Outlet /> : <Navigate to="/home" />;
};

export default PrivateRoutes;
