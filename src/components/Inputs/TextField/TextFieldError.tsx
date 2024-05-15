interface ITextFieldError {
  children: string;
}

const TextFieldError = ({ children }: ITextFieldError) => {
  return <span className="text-sm px-2 text-red">{children}</span>;
};

export default TextFieldError;
