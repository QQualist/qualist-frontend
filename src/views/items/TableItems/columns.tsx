import { formatDate } from "@/utils/formatDate";
import { ColumnDef } from "@tanstack/react-table";
import { ItemData } from "@/types/item";
import i18n from "@/i18n";
import Actions from "./actions";
import { t } from "i18next";

export const columns: ColumnDef<ItemData>[] = [
  {
    accessorKey: "uuid",
    header: () => null,
    cell: () => null,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      return (
        <div className="w-96 whitespace-normal break-words">
          {row.getValue("description")}
        </div>
      );
    },
  },
  {
    accessorKey: "priority_name",
    header: "Priority",
    accessorFn: (row) => row.priority.name,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("priority_name")}</div>
    ),
  },
  {
    accessorKey: "risk_name",
    header: "Risk",
    accessorFn: (row) => row.risk_type?.name || "N/A",
    cell: ({ row }) => {
      const riskType: string = row.getValue("risk_name");

      return (
        <div className="">
          {t(
            riskType
              .toLowerCase()
              .replace(/\b\w/g, (char: string) => char.toUpperCase())
          )}
        </div>
      );
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
  {
    id: "Actions",
    header: () => <div className="text-center">{i18n.t("Actions")}</div>,
    cell: ({ row }) => {
      return <Actions row={row} />;
    },
  },
];
