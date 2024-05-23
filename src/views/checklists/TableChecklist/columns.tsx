import { ChecklistData } from "@/types/Checklist";
import { formatDate } from "@/utils/formatDate";
import { ColumnDef } from "@tanstack/react-table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import i18n from "@/i18n";
import Actions from "./actions";

export const columns: ColumnDef<ChecklistData>[] = [
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
    accessorKey: "active",
    header: () => <div className="text-center">Status</div>,
    cell: ({ row }) => {
      const active = row.getValue("active");
      if (active) {
        return (
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="w-full flex justify-center">
                <div className="w-3 h-3  rounded-full bg-success cursor-pointer" />
              </div>
            </TooltipTrigger>
            <TooltipContent className="text-white">Active</TooltipContent>
          </Tooltip>
        );
      } else {
        return (
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="w-full flex justify-center">
                <div className="w-3 h-3  rounded-full bg-red cursor-pointer" />
              </div>
            </TooltipTrigger>
            <TooltipContent className="text-white">Deprecated</TooltipContent>
          </Tooltip>
        );
      }
    },
  },
  {
    accessorKey: "version",
    header: () => <div className="text-center">{i18n.t("Version")}</div>,
    cell: ({ row }) => {
      const version: number = parseInt(row.getValue("version"));
      return <div className="flex justify-center">{version}</div>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const date: string = row.getValue("createdAt");

      return <span>{formatDate(date)}</span>;
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => {
      const date: string = row.getValue("createdAt");

      return <span>{formatDate(date)}</span>;
    },
  },
  {
    id: "Actions",
    header: () => <div className="text-center">{i18n.t("Actions")}</div>,
    cell: ({ row }) => {
      return <Actions row={row} />;
    },
  },
];
