import { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
import i18n from "@/i18n";

interface DateFormats {
  [key: string]: string;
}
const dateFormats: DateFormats = {
  "pt-BR": "dd/MM/yyyy",
  "en-US": "MM/dd/yyyy",
};

export const useFormattedDate = (data: string) => {
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    const selectedLanguage = i18n.language;
    const dateFormat = dateFormats[selectedLanguage] || "MM/dd/yyyy";

    const parsedDate = parseISO(data);

    const newFormattedDate = format(parsedDate, dateFormat);

    setFormattedDate(newFormattedDate);
  }, [data]);

  return formattedDate;
};
