import { eachDayOfInterval, endOfWeek, startOfWeek } from "date-fns";
import { useTranslation } from "react-i18next";

interface IDaysWeek {
  year: number;
  month: number;
}

const DaysWeek = ({ year, month }: IDaysWeek) => {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  const daysOfWeek = eachDayOfInterval({
    start: startOfWeek(new Date(year, month - 1)),
    end: endOfWeek(new Date(year, month - 1)),
  });

  const formatDay = (date: Date) => {
    const dayWithTranslate = date
      .toLocaleString(selectedLanguage, { weekday: "short" })
      .replace(".", "");
    const capitalizedDay =
      dayWithTranslate.charAt(0).toUpperCase() + dayWithTranslate.slice(1);
    return capitalizedDay;
  };

  return (
    <>
      {daysOfWeek.map((weekDay, index) => (
        <span key={index} className="flex justify-center items-center truncate">
          {formatDay(weekDay)}
        </span>
      ))}
    </>
  );
};

export default DaysWeek;
