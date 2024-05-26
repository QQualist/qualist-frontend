import { useTranslation } from "react-i18next";

interface IComboboxError {
  children: string;
}

const ComboboxError = ({ children }: IComboboxError) => {
  const { t } = useTranslation();

  return <span className="text-sm px-2 text-red">{t(children)}</span>;
};

export default ComboboxError;
