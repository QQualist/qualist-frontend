import { Button } from "@/components/ui/button";
import Form from "./form";

const RightSideSignUp = () => {
  return (
    <div className="w-full h-screen p-4">
      <div className="flex w-full justify-end">
        <Button variant="link" className="font-bold">
          Login
        </Button>
      </div>
      <div className="flex w-full justify-center items-center p-10">
        <Form />
      </div>
    </div>
  );
};

export default RightSideSignUp;
