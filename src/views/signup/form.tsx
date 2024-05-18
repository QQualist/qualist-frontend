import { Button } from "@/components/ui/button";
import FormHeader from "./form-header";
import TextField from "@/components/Inputs/TextField";
import { Label } from "@/components/ui/label";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAdministratorSchema } from "@/schemas/users/createAdministrator";
import { CreateAdministratorData } from "@/types/CreateAdministratorData";
import { signUpAdministrator } from "@/utils/signUpAdministrator";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { isAxiosError } from "axios";
import FormFooter from "./form-footer";

const Form = () => {
  const queryClient = useQueryClient();

  const { toast } = useToast();

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

  const mutation = useMutation({
    mutationFn: signUpAdministrator,
    onSuccess: () => {
      toast({
        variant: "success",
        title: 'Success!',
        description: "User created successfully!",
      });
      queryClient.invalidateQueries({ queryKey: ["SignUpAdministrator"] });
    },
    onError: (error) => {
      if (isAxiosError(error) && error.response) {
        toast({
          variant: "destructive",
          title: `Ops!`,
          description: error.response.data.message,
        });
      } else {
        toast({
          variant: "destructive",
          title: `Ops!`,
          description: `An error occurred: ${error.message}`,
        });
      }
    },
  });

  const sendForm = (data: CreateAdministratorData) => {
    mutation.mutateAsync({
      name: data.name,
      surname: data.surname,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });
  };

  return (
    <div className="w-3/4 flex flex-col h-max gap-5">
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
                placeholder="Enter your password"
                register={register("password")}
              />
              <TextField.Icon
                icon={showPassword ? FiEye : FiEyeOff}
                onClick={togglePassword}
              />
            </TextField.Content>
          </TextField.Root>
          <TextField.Root
            error={errors.confirmPassword && errors.confirmPassword.message}
          >
            <Label htmlFor="confirm-password">Confirm password</Label>
            <TextField.Content>
              <TextField.Input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                register={register("confirmPassword")}
              />
              <TextField.Icon
                icon={showConfirmPassword ? FiEye : FiEyeOff}
                onClick={toggleConfirmPassword}
              />
            </TextField.Content>
          </TextField.Root>

          <Button
            type="submit"
            variant={mutation.isPending ? "disabled" : "default"}
            isPanding={mutation.isPending}
          >
            Sign Up
          </Button>
        </form>
        <FormFooter />
      </div>
    </div>
  );
};

export default Form;
