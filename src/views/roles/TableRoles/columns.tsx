import { formatDate } from "@/utils/formatDate";
import { ColumnDef } from "@tanstack/react-table";
import i18n from "@/i18n";
import { RolesData } from "@/types/roles";
import { AiFillQuestionCircle } from "react-icons/ai";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { t } from "i18next";

export const columns: ColumnDef<RolesData>[] = [
  {
    accessorKey: "uuid",
    header: () => null,
    cell: () => null,
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "canDispenseNonConformities",
    header: () => {
      return (
        <div className="flex gap-1">
          <span>{t('Can dispense NC?')}</span>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger>
                <AiFillQuestionCircle className="w-4 h-4" />
              </TooltipTrigger>
              <TooltipContent className="w-40">
                <p className="dark:text-white">{t('Informs whether the role has permission to dispense a non-conformity')}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      );
    },
    cell: ({ row }) => {
      const canDispenseNonConformities: boolean = row.getValue("canDispenseNonConformities");

      return <span>{canDispenseNonConformities ? i18n.t('Yes') : i18n.t('No')}</span>;
    },
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="text-center">{i18n.t("Created At")}</div>,
    cell: ({ row }) => {
      const date: string = row.getValue("createdAt");

      return (
        <div className="text-center">
          <span>{formatDate(date)}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "updatedAt",
    header: () => <div className="text-center">{i18n.t("Updated At")}</div>,
    cell: ({ row }) => {
      const date: string = row.getValue("updatedAt");

      return (
        <div className="text-center">
          <span>{formatDate(date)}</span>
        </div>
      );
    },
  },
];
