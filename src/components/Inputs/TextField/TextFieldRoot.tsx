import { ReactNode } from "react";
import TextField from ".";

interface ITextFieldRoot {
  children: ReactNode;
  error: string | undefined;
}

const TextFieldRoot = ({ children, error }: ITextFieldRoot) => {
  return (
    <div className="w-full h-max flex flex-col gap-1">
      {children}
      {error && <TextField.Error>{error}</TextField.Error>}
    </div>
  );
};

export default TextFieldRoot;
