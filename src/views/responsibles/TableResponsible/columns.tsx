import { formatDate } from "@/utils/formatDate";
import { ColumnDef } from "@tanstack/react-table";
import i18n from "@/i18n";
import { ResponsibleData } from "@/types/responsible";

export const columns: ColumnDef<ResponsibleData>[] = [
  {
    accessorKey: "uuid",
    header: () => null,
    cell: () => null,
  },
  {
    accessorFn: (row: ResponsibleData) => `${row.name} ${row.surname}`,
    id: "fullName",
    header: "Name",
    cell: ({ row }) => {
      const fullName: string = row.getValue("fullName");
      const email = row.original.email;
      return (
        <div className="whitespace-normal break-words">
          <div>{fullName}</div>
          <div className="text-light-gray text-sm">{email}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "userType",
    header: "Type",
    cell: ({ row }) => {
      const userType = row.original.type.name;
      return (
        <div className="whitespace-normal break-words">
          {i18n.t(
            userType
              ?.toLowerCase()
              .replace(/\b\w/g, (char: string) => char.toUpperCase())
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const role = row.original.role;
      return <div className="whitespace-normal break-words">{role.name}</div>;
    },
  },
  {
    accessorKey: "superior",
    header: "Superior",
    cell: ({ row }) => {
      const superior = row.original.superior;
      return superior ? (
        <div className="whitespace-normal break-words">
          <div>
            {superior.name} {superior.surname}
          </div>
          <div className="text-light-gray text-sm">{superior.email}</div>
        </div>
      ) : (
        "N/A"
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
];
