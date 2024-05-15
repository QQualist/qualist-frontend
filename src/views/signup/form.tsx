import { Button } from "@/components/ui/button";
import FormHeader from "./form-header";
import TextField from "@/components/Inputs/TextField";
import { Label } from "@/components/ui/label";
import TextFieldContent from "@/components/Inputs/TextField/InputContent";
import TextFieldInput from "@/components/Inputs/TextField/TextFieldInput";

const Form = () => {
  return (
    <div className="flex flex-col w-full h-max gap-5">
      <FormHeader />
      <div className="flex flex-col gap-4">
        <form className="w-full flex flex-col space-y-4">
          <div className="flex w-full gap-2">
            <TextField.Root>
              <Label htmlFor="name">Name</Label>
              <TextFieldContent>
                <TextFieldInput id="name" type="text" placeholder="Ex.: John" />
              </TextFieldContent>
            </TextField.Root>

            <TextField.Root>
              <Label htmlFor="surname">Surname</Label>
              <TextFieldContent>
                <TextFieldInput
                  id="surname"
                  type="text"
                  placeholder="Ex.: Doe"
                />
              </TextFieldContent>
            </TextField.Root>
          </div>
          <TextField.Root>
            <Label htmlFor="email">Email</Label>
            <TextFieldContent>
              <TextFieldInput
                id="email"
                type="email"
                placeholder="Ex.: john.doe@example.com"
              />
            </TextFieldContent>
          </TextField.Root>

          <TextField.Root>
            <Label htmlFor="password">Password</Label>
            <TextFieldContent>
              <TextFieldInput
                id="password"
                type="password"
                placeholder="Ex.: Enter your password"
              />
            </TextFieldContent>
          </TextField.Root>
          <TextField.Root>
            <Label htmlFor="confirm-password">Confirm password</Label>
            <TextFieldContent>
              <TextFieldInput id="confirm-password" type="password" placeholder="Ex.: Confirm your password" />
            </TextFieldContent>
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
