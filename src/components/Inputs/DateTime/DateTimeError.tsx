import { useTranslation } from "react-i18next";

interface IDateTimeError {
  children: string;
}

const DateTimeError = ({ children }: IDateTimeError) => {
  const { t } = useTranslation();

  return <span className="text-sm px-2 text-red">{t(children)}</span>;
};

export default DateTimeError;
