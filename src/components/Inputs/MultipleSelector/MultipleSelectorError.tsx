import { useTranslation } from "react-i18next";

interface IMultipleSelectorError {
  children: string;
}

const MultipleSelectorError = ({ children }: IMultipleSelectorError) => {
  const { t } = useTranslation();

  return <span className="text-sm px-2 text-red">{t(children)}</span>;
};

export default MultipleSelectorError;
