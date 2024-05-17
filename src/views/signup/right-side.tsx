import { Button } from "@/components/ui/button";
import Form from "./form";
import { Link } from "react-router-dom";

const RightSideSignUp = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex justify-end items-center absolute top-3 right-3">
        <Button variant="link" className="font-bold dark:text-light-blue" asChild>
          <Link to="/signin">Login</Link>
        </Button>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <Form />
      </div>
    </div>
  );
};

export default RightSideSignUp;
