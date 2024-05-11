import { useMutation, useQuery, useQueryClient } from "react-query";
import { createTags, getTagsList } from "./api.ts";
import { TAGS_LIST_QUERY_KEY } from "@/app/api/tags/queryKeys.ts";

export const useTagsList = () => {
  const { data, isLoading } = useQuery(
    [TAGS_LIST_QUERY_KEY],
    () => getTagsList(),
    {
      onSettled: () => {},
    },
  );

  return { data, isLoading };
};

export const useTagsCreate = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ({
      data: { tags },
    }: {
      data: {
        tags: string[];
      };
      onSettled: () => void;
    }) => createTags(tags),
    {
      onSettled: async (_data, _error, { onSettled }) => {
        await queryClient.invalidateQueries([TAGS_LIST_QUERY_KEY]);

        onSettled();
      },
    },
  );

  return { mutateTagsCreate: mutate };
};
