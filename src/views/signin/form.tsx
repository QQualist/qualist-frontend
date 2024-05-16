import TextField from "@/components/Inputs/TextField";
import FormHeader from "./form-header";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const Form = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePassword = () => {
    setShowPassword((state) => !state);
  };

  return (
    <div className="w-3/4 flex flex-col h-max gap-5">
      <FormHeader />
      <div className="flex flex-col gap-4">
        <form
          className="w-full flex flex-col space-y-4"
          // onSubmit={handleSubmit(sendForm)}
        >
          <TextField.Root error={"Error"}>
            <Label htmlFor="email">Email</Label>
            <TextField.Content>
              <TextField.Input
                id="email"
                type="email"
                placeholder="Ex.: john.doe@gmail.com"
              
              />
            </TextField.Content>
          </TextField.Root>

          <TextField.Root error={"Error"}>
            <Label htmlFor="password">Password</Label>
            <TextField.Content>
              <TextField.Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Ex.: Enter your password"
               
              />
              <TextField.Icon
                icon={showPassword ? FiEye : FiEyeOff}
                onClick={togglePassword}
              />
            </TextField.Content>
          </TextField.Root>
          <Button
            type="submit"
            variant='default'
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
