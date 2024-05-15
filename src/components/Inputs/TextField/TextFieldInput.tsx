import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface ITextFieldInput extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: "text" | "password" | "email";
  placeholder: string;
  register?: UseFormRegisterReturn;
}

const TextFieldInput = ({
  id,
  type,
  placeholder,
  register,
  ...props
}: ITextFieldInput) => {
  return (
    <input
      className="w-full h-9 pr-3 placeholder:text-muted-foreground placeholder:font-medium text-sm shadow-sm focus-visible:outline-none"
      id={id}
      type={type}
      placeholder={placeholder}
      {...register}
      {...props}
    />
  );
};

export default TextFieldInput;
