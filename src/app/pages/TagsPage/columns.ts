import { ColumnDef } from "@tanstack/react-table";
import { TagType } from "@/app/types/tags.ts";

export const TagsTableColumns: ColumnDef<TagType>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
];
