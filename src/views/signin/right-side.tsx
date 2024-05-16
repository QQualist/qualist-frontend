import { Button } from "@/components/ui/button";
import Form from "./form";

const RightSideSignIn = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex justify-end items-center absolute top-3 right-3">
        <Button variant="link" className="font-bold">
          Register
        </Button>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <Form />
      </div>
    </div>
  );
};

export default RightSideSignIn;
