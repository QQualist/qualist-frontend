import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <input
      className="w-full h-9 pr-3 placeholder:text-muted-foreground placeholder:font-medium text-sm shadow-sm bg-transparent focus-visible:outline-none"
      id={id}
      type={type}
      placeholder={t(placeholder)}
      {...register}
      {...props}
    />
  );
};

export default TextFieldInput;
