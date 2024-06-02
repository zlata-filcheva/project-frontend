import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  createPost,
  deletePost,
  getPost,
  getPostsCount,
  getPostsList,
  updatePost,
} from "./api.ts";
import {
  POST_QUERY_KEY,
  POSTS_COUNT_QUERY_KEY,
  POSTS_LIST_QUERY_KEY,
} from "@/app/api/posts/queryKeys.ts";
import { useState } from "react";
import { POST_PAGE_ROW_COUNT } from "@/app/pages/PostsPage/constants.ts";
import { CreatePostProps, EditPostProps } from "@/app/types/post.ts";
import { useLocation } from "react-router-dom";

export const usePost = () => {
  const {
    state: { postId },
  } = useLocation();

  const { data, isLoading } = useQuery(
    [POST_QUERY_KEY],
    () => getPost(postId),
    {
      onSettled: () => {},
    },
  );

  return { postData: data, isPostDataLoading: isLoading };
};

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
    ({ data }: { data: CreatePostProps; onSuccess: () => void }) =>
      createPost(data),
    {
      onSuccess: async (_data, { onSuccess }) => {
        onSuccess();
      },
    },
  );

  return { mutatePostCreate: mutate };
};

export const usePostUpdate = () => {
  const { mutate } = useMutation(
    ({ data }: { data: EditPostProps; onSuccess: () => void }) =>
      updatePost(data),
    {
      onSuccess: async (_data, { onSuccess }) => {
        onSuccess();
      },
    },
  );

  return { mutatePostUpdate: mutate };
};

export const usePostDelete = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ({
      data,
    }: {
      data: { id: number; userId: string };
      onSuccess: () => void;
    }) => deletePost(data),
    {
      onSuccess: async (_data, { onSuccess }) => {
        await queryClient.invalidateQueries([POSTS_LIST_QUERY_KEY]);
        await queryClient.invalidateQueries([POSTS_COUNT_QUERY_KEY]);

        onSuccess();
      },
    },
  );

  return { mutatePostDelete: mutate };
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
