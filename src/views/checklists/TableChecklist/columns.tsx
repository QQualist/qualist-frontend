import { ChecklistData } from "@/types/Checklist";
import { ColumnDef } from "@tanstack/react-table";


export const columns: ColumnDef<ChecklistData>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "active",
      header: "Active",
    },
    {
      accessorKey: "version",
      header: "Version",
    },
    {
      accessorKey: "createdAt",
      header: "Created At",
    },
    {
      accessorKey: "updatedAt",
      header: "Updated At",
    },
  ]