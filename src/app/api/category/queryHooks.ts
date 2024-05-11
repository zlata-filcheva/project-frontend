import { useMutation, useQuery, useQueryClient } from "react-query";
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
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ({
      data,
    }: {
      data: { category: string; description: string };
      onSettled: () => void;
    }) => createCategory(data),
    {
      onSettled: async (_data, _error, { onSettled }) => {
        await queryClient.invalidateQueries([CATEGORIES_LIST_QUERY_KEY]);

        onSettled();
      },
    },
  );

  return { mutateCategoryCreate: mutate };
};
