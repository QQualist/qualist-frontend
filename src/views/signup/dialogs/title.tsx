import { useTranslation } from "react-i18next";

interface ITitle {
  children: string;
}

export const Title = ({ children }: ITitle) => {

  const { t } = useTranslation();

  return <h2 className="font-semibold text-base">{t(children)}</h2>;
};
