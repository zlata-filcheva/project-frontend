import { useMutation, useQuery, useQueryClient } from "react-query";
import { createCategory, getCategoriesList } from "./api.ts";
import { CategoryType } from "@/app/types/category.ts";
import { CATEGORIES_LIST_QUERY_KEY } from "@/app/api/category/queryKeys.ts";

export const useCategoriesList = () => {
  const { data, isLoading } = useQuery(
    [CATEGORIES_LIST_QUERY_KEY],
    () => getCategoriesList(),
    {
      onSettled: () => {},
    },
  );

  return { data, isLoading };
};

export const useCategoryCreate = () => {
  const client = useQueryClient();

  const { mutate } = useMutation(
    ({
      data,
    }: {
      data: { category: string; description: string };
      onSettled: (_data: CategoryType) => void;
    }) => createCategory(data),
    {
      onSettled: async (_data: any, _error, { onSettled }) => {
        await client.invalidateQueries([CATEGORIES_LIST_QUERY_KEY]);

        onSettled(_data);
      },
    },
  );

  return { mutateCategoryCreate: mutate };
};
