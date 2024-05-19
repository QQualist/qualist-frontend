import TextField from "@/components/Inputs/TextField";
import FormHeader from "./form-header";
import { Label } from "@/components/ui/label";
import { useContext, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { SignInUserData } from "@/types/SignInUserData";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInUserSchema } from "@/schemas/users/signInUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { isAxiosError } from "axios";
import { UserContext } from "@/contexts/user";
import { ContextUser } from "@/types/ContextUser";
import { useTranslation } from "react-i18next";

const Form = () => {
  const queryClient = useQueryClient();

  const { t } = useTranslation();

  const { toast } = useToast();
  const { SignIn } = useContext(UserContext) as ContextUser;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePassword = () => {
    setShowPassword((state) => !state);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInUserData>({
    resolver: zodResolver(signInUserSchema),
  });

  const mutation = useMutation({
    mutationFn: SignIn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["signInUsers"] });
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
          description: `${t("An error occurred:")} ${error.message}`,
        });
      }
    },
  });

  const sendForm = (data: SignInUserData) => {
    mutation.mutateAsync({
      email: data.email,
      password: data.password,
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
          <TextField.Root error={errors.email && errors.email.message}>
            <Label htmlFor="email">Email</Label>
            <TextField.Content>
              <TextField.Input
                id="email"
                type="email"
                placeholder="john.doe@gmail.com"
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
          <Button
            type="submit"
            size='lg'
            variant={mutation.isPending ? "disabled" : "default"}
            isPanding={mutation.isPending}
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
