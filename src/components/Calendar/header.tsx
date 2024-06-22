import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";

interface IHeader {
  date: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const Header = ({ date, onPrevMonth, onNextMonth }: IHeader) => {
  const { i18n } = useTranslation();

  const selectedLanguage = i18n.language;

  const formatDate = (date: Date) => {
    const dateWithTranslate = date
      ?.toLocaleString(selectedLanguage, { month: "long" })
      .replace(".", "");
    const capitalizedMonth =
      dateWithTranslate.charAt(0).toUpperCase() + dateWithTranslate.slice(1);
    return `${capitalizedMonth} / ${format(date, "yyy")}`;
  };

  return (
    <div className="flex w-full justify-between items-center mb-3">
      <span className="text-2xl font-bold">{formatDate(date)}</span>
      <div className="flex gap-2">
        <Button variant="outline" onClick={onPrevMonth}>
          <MdOutlineNavigateBefore size={24} />
        </Button>
        <Button variant="outline" onClick={onNextMonth}>
          <MdOutlineNavigateNext size={24} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
