import { formatDate } from "@/utils/formatDate";
import { ColumnDef } from "@tanstack/react-table";
import { ItemData } from "@/types/item";
import i18n from "@/i18n";
import Actions from "./actions";

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
                {row.getValue('description')}
            </div>
        );
    }
  },
  {
    accessorKey: "name",
    header: "Priority",
    accessorFn: (row) => row.priority.name,
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
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
