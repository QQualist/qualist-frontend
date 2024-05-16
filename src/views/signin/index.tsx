import LeftSideSignIn from "./left-side";
import RightSideSignIn from "./right-side";


const SignIn = () => {
  return (
    <main className="flex w-screen h-screen">
      <LeftSideSignIn />
      <RightSideSignIn />
    </main>
  );
};

export default SignIn;
