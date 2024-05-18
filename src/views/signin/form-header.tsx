import { useTranslation } from "react-i18next";

const FormHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl text-dark-blue dark:text-light-blue">
        {t("Welcome back")}
      </h1>
      <span className="font-medium text-base text-light-gray">
        {t("Enter your credentials to log in to the platform")}
      </span>
    </div>
  );
};

export default FormHeader;
