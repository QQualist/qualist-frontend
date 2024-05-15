import { InputHTMLAttributes } from "react";

interface ITextFieldInput extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: "text" | "password" | "email";
  placeholder: string;
  //Add register
}

const TextFieldInput = ({ id, type, placeholder, ...props }: ITextFieldInput) => {
  return (
    <input 
        className="w-full h-9 pr-3 placeholder:text-muted-foreground placeholder:font-medium text-sm shadow-sm focus-visible:outline-none"
        id={id}
        type={type}
        placeholder={placeholder}
        {...props}
    />
  );
};

export default TextFieldInput;
