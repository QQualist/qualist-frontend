import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";
import { languageNames } from "./languages-name";
import Flag from "react-world-flags";
import { languageToCountryCode } from "./language-to-country-code";

const ToggleLanguage = () => {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  function handleChangeLanguage(language: string) {
    i18n.changeLanguage(language);
  }

  // Sort countries by name
  const countries = Object.keys(languageNames)
    .map((key) => ({
      code: languageToCountryCode[key],
      name: languageNames[key],
      languageCode: key,
    }))
    .sort((a, b) => a.name.localeCompare(b.name)); 

  return (
    <Select
      onValueChange={(language: string) => handleChangeLanguage(language)}
    >
      <SelectTrigger>
        <Flag
          code={languageToCountryCode[selectedLanguage]}
          className="w-5 h-5 mr-2"
        />
      </SelectTrigger>
      <SelectContent className="flex w-full">
        {countries.map((country) => (
          <SelectItem
            key={country.languageCode}
            value={country.languageCode}
            className="hover:cursor-pointer"
          >
            <Flag
              code={languageToCountryCode[country.languageCode]}
              className="w-5 h-5"
            />
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ToggleLanguage;
