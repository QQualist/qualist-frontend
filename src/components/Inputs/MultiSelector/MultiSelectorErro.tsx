import { useTranslation } from "react-i18next";

interface IMultiSelectorError {
  children: string;
}

const MultiSelectorError = ({ children }: IMultiSelectorError) => {
  const { t } = useTranslation();

  return <span className="text-sm px-2 text-red">{t(children)}</span>;
};

export default MultiSelectorError;
