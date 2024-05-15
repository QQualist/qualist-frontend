import { Button } from "@/components/ui/button";
import FormHeader from "./form-header";
import TextField from "@/components/Inputs/TextField";
import { Label } from "@/components/ui/label";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";

const Form = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const togglePassword = () => setShowPassword((state) => !state);

  const toggleConfirmPassword = () => setShowConfirmPassword((state) => !state);

  return (
    <div className="flex flex-col w-full h-max gap-5">
      <FormHeader />
      <div className="flex flex-col gap-4">
        <form className="w-full flex flex-col space-y-4">
          <div className="flex w-full gap-2">
            <TextField.Root>
              <Label htmlFor="name">Name</Label>
              <TextField.Content>
                <TextField.Input
                  id="name"
                  type="text"
                  placeholder="Ex.: John"
                />
              </TextField.Content>
            </TextField.Root>

            <TextField.Root>
              <Label htmlFor="surname">Surname</Label>
              <TextField.Content>
                <TextField.Input
                  id="surname"
                  type="text"
                  placeholder="Ex.: Doe"
                />
              </TextField.Content>
            </TextField.Root>
          </div>
          <TextField.Root>
            <Label htmlFor="email">Email</Label>
            <TextField.Content>
              <TextField.Input
                id="email"
                type="email"
                placeholder="Ex.: john.doe@example.com"
              />
            </TextField.Content>
          </TextField.Root>

          <TextField.Root>
            <Label htmlFor="password">Password</Label>
            <TextField.Content>
              <TextField.Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Ex.: Enter your password"
              />
              <TextField.Icon
                icon={showPassword ? FiEye : FiEyeOff}
                onClick={togglePassword}
              />
            </TextField.Content>
          </TextField.Root>
          <TextField.Root>
            <Label htmlFor="confirm-password">Confirm password</Label>
            <TextField.Content>
              <TextField.Input
                id="confirm-password"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Ex.: Confirm your password"
              />
              <TextField.Icon
                icon={showConfirmPassword ? FiEye : FiEyeOff}
                onClick={toggleConfirmPassword}
              />
            </TextField.Content>
          </TextField.Root>

          <Button type="submit" variant="default">
            Sign Up
          </Button>
        </form>
        <span className="w-full text-center font-medium text-sm">
          Ao se registrar na plataforma, você concorda com os{" "}
          <Button variant="link" className="m-0 p-0 text-sm">
            termos de uso
          </Button>{" "}
          e{" "}
          <Button variant="link" className="m-0 p-0 text-sm">
            políticas de privacidade
          </Button>
        </span>
      </div>
    </div>
  );
};

export default Form;
