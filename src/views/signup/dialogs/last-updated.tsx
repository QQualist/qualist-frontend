import { DialogDescription } from "@/components/ui/dialog";
import i18n from "@/i18n";
import { useTranslation } from "react-i18next";

interface ILastUpdated {
  day: number;
  month: number;
  year: number;
}

const LastUpdated = ({ day, month, year }: ILastUpdated) => {
  const selectedLanguage = i18n.language;

  const { t } = useTranslation();

  const lastUpdated = new Date(year, month, day).toLocaleString(selectedLanguage, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <DialogDescription className="font-medium">
      {t("Last Updated:")} {lastUpdated}
    </DialogDescription>
  );
};

export default LastUpdated;
