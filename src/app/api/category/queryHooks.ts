import { useQuery } from "react-query";
import { getCategoriesList } from "./api.ts";

export const useCategoriesList = () => {
  const { data, isLoading } = useQuery(
    ["categories-list"],
    () => getCategoriesList(),
    {
      onSettled: () => {},
    },
  );

  return { data, isLoading };
};
