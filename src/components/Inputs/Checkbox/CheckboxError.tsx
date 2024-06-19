import { useTranslation } from "react-i18next";

interface ICheckboxError {
    children: string;
}

const CheckboxError = ({ children }: ICheckboxError) => {
  const { t } = useTranslation();

  return <span className="text-sm px-2 text-red">{t(children)}</span>;
};

export default CheckboxError;
