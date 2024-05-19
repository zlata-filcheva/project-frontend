import { useMutation, useQuery } from "react-query";
import { createPost, getPostsCount, getPostsList } from "./api.ts";
import {
  POSTS_COUNT_QUERY_KEY,
  POSTS_LIST_QUERY_KEY,
} from "@/app/api/posts/queryKeys.ts";
import { useState } from "react";
import { POST_PAGE_ROW_COUNT } from "@/app/pages/PostsPage/constants.ts";

export const usePostsList = () => {
  const [page, setPage] = useState(1);

  const offset = (POST_PAGE_ROW_COUNT * (page - 1)).toString();

  const { data, isLoading } = useQuery(
    [POSTS_LIST_QUERY_KEY],
    () => getPostsList({ rowCount: POST_PAGE_ROW_COUNT.toString(), offset }),
    {
      onSettled: () => {},
    },
  );

  return { data, isLoading, page, setPage };
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

export const usePostsCount = () => {
  const { data, isLoading } = useQuery(
    [POSTS_COUNT_QUERY_KEY],
    () => getPostsCount(POST_PAGE_ROW_COUNT.toString()),
    {
      onSettled: () => {},
    },
  );

  return { data, isLoading };
};
