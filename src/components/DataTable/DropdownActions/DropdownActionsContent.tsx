import { ReactNode } from "react";
import { DropdownMenuContent, DropdownMenuLabel } from "../../ui/dropdown-menu";
import { useTranslation } from "react-i18next";

interface IDropdownActionsContent {
  children: ReactNode;
}

const DropdownActionsContent = ({ children }: IDropdownActionsContent) => {
  const { t } = useTranslation();

  return (
    <DropdownMenuContent align="end" className="space-y-1">
      <DropdownMenuLabel className="w-full flex justify-between">
        <span>{t("Actions")}</span>
      </DropdownMenuLabel>
      {children}
    </DropdownMenuContent>
  );
};

export default DropdownActionsContent;
