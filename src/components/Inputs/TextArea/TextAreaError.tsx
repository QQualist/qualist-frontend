import { useTranslation } from "react-i18next";

interface ITextAreaError {
  children: string;
}

const TextAreaError = ({ children }: ITextAreaError) => {
  const { t } = useTranslation();

  return <span className="text-sm px-2 text-red">{t(children)}</span>;
};

export default TextAreaError;
