import { useTranslation } from "react-i18next";

interface IParagraph {
  children: string;
}

export const Paragraph = ({ children }: IParagraph) => {
  const { t } = useTranslation();

  return <p className="text-justify text-sm">{t(children)}</p>;
};
