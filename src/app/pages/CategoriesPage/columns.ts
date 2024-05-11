import { CategoryType } from "@/app/types/category.ts";
import { ColumnDef } from "@tanstack/react-table";

export const CategoriesTableColumns: ColumnDef<CategoryType>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "surname",
    header: "Surname",
  },
  {
    accessorKey: "nickName",
    header: "Nickname",
  },
];
