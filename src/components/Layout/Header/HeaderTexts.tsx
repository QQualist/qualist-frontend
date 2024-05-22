import { useTranslation } from "react-i18next";

interface IHeaderTexts {
  title: string;
  subtitle: string;
}

const HeaderTexts = ({ title, subtitle }: IHeaderTexts) => {

    const { t } = useTranslation();

  return (
    <div className="w-full ">
      <h1 className="text-3xl font-bold">{t(title)}</h1>
      <span className="text-lg text-dark-gray dark:text-light-gray">
        {t(subtitle)}
      </span>
    </div>
  );
};

export default HeaderTexts;
