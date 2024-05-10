import { CategoryType } from "@/app/types/category.ts";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<CategoryType>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];
