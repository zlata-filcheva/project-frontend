import { useMutation, useQuery } from "react-query";
import { createPost, getPostsList } from "./api.ts";
import { POSTS_LIST_QUERY_KEY } from "@/app/api/posts/queryKeys.ts";

export const usePostsList = ({
  rowCount,
  offset,
}: {
  rowCount: string;
  offset: string;
}) => {
  const { data, isLoading } = useQuery(
    [POSTS_LIST_QUERY_KEY],
    () => getPostsList({ rowCount, offset }),
    {
      onSettled: () => {},
    },
  );

  return { data, isLoading };
};

export const usePostCreate = () => {
  const { mutate } = useMutation(
    ({
      data,
    }: {
      data: {
        title: string;
        content: string;
        categoryId: number;
        userId: string;
        tagIds: number[];
      };
      onSettled: () => void;
    }) => createPost(data),
    {
      onSettled: async (_data, _error, { onSettled }) => {
        onSettled();
      },
    },
  );

  return { mutatePostCreate: mutate };
};
