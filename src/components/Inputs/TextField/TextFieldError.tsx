import { useTranslation } from "react-i18next";

interface ITextFieldError {
  children: string;
}

const TextFieldError = ({ children }: ITextFieldError) => {
  const { t } = useTranslation();

  return <span className="text-sm px-2 text-red">{t(children)}</span>;
};

export default TextFieldError;
