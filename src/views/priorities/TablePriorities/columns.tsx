import { formatDate } from "@/utils/formatDate";
import { ColumnDef } from "@tanstack/react-table";
import { ItemData } from "@/types/item";
import i18n from "@/i18n";
import { PriorityData } from "@/types/priority";
import { convertDeadline } from "@/utils/convertDeadline";
import { intervalToDuration } from "date-fns";
import Actions from "./actions";

export const columns: ColumnDef<PriorityData>[] = [
  {
    accessorKey: "uuid",
    header: () => null,
    cell: () => null,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return <div>{row.getValue("name")}</div>;
    },
  },
  {
    accessorKey: "deadline",
    header: "Deadline",
    cell: ({ row }) => {
      const rowDeadline: string = row.getValue("deadline");
      const { days, hours, minutes, seconds } = convertDeadline(
        parseInt(rowDeadline, 10)
      );

      return (
        <div className="">
          {days > 0 && (
            <span>
              {days} {days === 1 ? "day" : "days"}{" "}
            </span>
          )}
          {hours > 0 && (
            <span>
              {hours} {hours === 1 ? "hour" : "hours"}{" "}
            </span>
          )}
          {minutes > 0 && (
            <span>
              {minutes} {minutes === 1 ? "minute" : "minutes"}{" "}
            </span>
          )}
          {seconds > 0 && (
            <span>
              {seconds} {seconds === 1 ? "second" : "seconds"}{" "}
            </span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "color",
    header: () => <div className="text-center">{i18n.t("Color")}</div>,
    cell: ({ row }) => {
      return (
        <div className="flex justify-center">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: row.getValue("color") }}
          />
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
