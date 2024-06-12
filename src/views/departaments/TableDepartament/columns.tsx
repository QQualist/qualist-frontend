import { DepartamentData } from "@/types/departament";
import { formatDate } from "@/utils/formatDate";
import { ColumnDef } from "@tanstack/react-table";


export const columns: ColumnDef<DepartamentData>[] = [
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
      const date: string = row.getValue("updatedAt");

      return <span>{formatDate(date)}</span>;
    },
  },
  
];
