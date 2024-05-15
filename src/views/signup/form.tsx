import { Button } from "@/components/ui/button";
import FormHeader from "./form-header";
import TextField from "@/components/Inputs/TextField";
import { Label } from "@/components/ui/label";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createAdministratorSchema } from "@/schemas/users/createAdministrator";

type CreateAdministratorData = z.infer<typeof createAdministratorSchema>;

const Form = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAdministratorData>({
    resolver: zodResolver(createAdministratorSchema),
  });

  const togglePassword = () => setShowPassword((state) => !state);

  const toggleConfirmPassword = () => setShowConfirmPassword((state) => !state);

  const sendForm = (data: CreateAdministratorData) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col w-full h-max gap-5">
      <FormHeader />
      <div className="flex flex-col gap-4">
        <form
          className="w-full flex flex-col space-y-4"
          onSubmit={handleSubmit(sendForm)}
        >
          <div className="flex w-full gap-2">
            <TextField.Root error={errors.name && errors.name.message}>
              <Label htmlFor="name">Name</Label>
              <TextField.Content>
                <TextField.Input
                  id="name"
                  type="text"
                  placeholder="Ex.: John"
                  register={register("name")}
                />
              </TextField.Content>
            </TextField.Root>

            <TextField.Root error={errors.surname && errors.surname.message}>
              <Label htmlFor="surname">Surname</Label>
              <TextField.Content>
                <TextField.Input
                  id="surname"
                  type="text"
                  placeholder="Ex.: Doe"
                  register={register("surname")}
                />
              </TextField.Content>
            </TextField.Root>
          </div>
          <TextField.Root error={errors.email && errors.email.message}>
            <Label htmlFor="email">Email</Label>
            <TextField.Content>
              <TextField.Input
                id="email"
                type="email"
                placeholder="Ex.: john.doe@example.com"
                register={register("email")}
              />
            </TextField.Content>
          </TextField.Root>

          <TextField.Root error={errors.password && errors.password.message}>
            <Label htmlFor="password">Password</Label>
            <TextField.Content>
              <TextField.Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Ex.: Enter your password"
                register={register("password")}
              />
              <TextField.Icon
                icon={showPassword ? FiEye : FiEyeOff}
                onClick={togglePassword}
              />
            </TextField.Content>
          </TextField.Root>
          <TextField.Root error={errors.confirmPassword && errors.confirmPassword.message}>
            <Label htmlFor="confirm-password">Confirm password</Label>
            <TextField.Content>
              <TextField.Input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Ex.: Confirm your password"
                register={register('confirmPassword')}
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
