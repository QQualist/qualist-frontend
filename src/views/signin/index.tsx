import { useContext } from "react";
import LeftSideSignIn from "./left-side";
import RightSideSignIn from "./right-side";
import { UserContext } from "@/contexts/user";
import { ContextUser } from "@/types/ContextUser";
import { Navigate } from "react-router-dom";


const SignIn = () => {

  const { signed } = useContext(UserContext) as ContextUser;

  if (signed) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <main className="flex w-screen h-screen">
      <LeftSideSignIn />
      <RightSideSignIn />
    </main>
  );
};

export default SignIn;
