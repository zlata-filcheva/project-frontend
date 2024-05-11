import { useMutation, useQuery } from "react-query";
import { createCategory, getCategoriesList } from "./api.ts";
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
  const { mutate } = useMutation(
    `${CATEGORIES_LIST_QUERY_KEY}`,
    ({
      data,
    }: {
      data: { category: string; description: string };
      onSettled: () => void;
    }) => createCategory(data),
    {
      onSettled: async (_data, _error, { onSettled }) => {
        onSettled();
      },
    },
  );

  return { mutateCategoryCreate: mutate };
};
