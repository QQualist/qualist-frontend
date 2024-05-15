import { Button } from "@/components/ui/button";
import Form from "./form";

const RightSideSignUp = () => {
  return (
    <div className="w-full max-h-full p-3">
      <div className="flex w-full justify-end">
        <Button variant="link" className="font-bold">
          Login
        </Button>
      </div>
      <div className="flex w-full max-h-full justify-center items-center overflow-y-auto">
        <Form />
      </div>
    </div>
  );
};

export default RightSideSignUp;
