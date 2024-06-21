import { Label } from "@/components/ui/label";
import { LabelHTMLAttributes } from "react";
import { useTranslation } from "react-i18next";

interface ICheckboxLabel extends LabelHTMLAttributes<HTMLLabelElement> {
  label: string;
  text?: string;
}

const CheckboxLabel = ({ label, text, htmlFor }: ICheckboxLabel) => {
  const { t } = useTranslation();

  return (
    <div className="grid leading-none">
      <Label
        htmlFor={htmlFor}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </Label>
      {text && <p className="text-sm text-muted-foreground">{t(text)}</p>}
    </div>
  );
};

export default CheckboxLabel;
