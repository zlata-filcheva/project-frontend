import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  createComment,
  deleteComment,
  getCommentsCount,
  getCommentsList,
  updateComment,
} from "./api.ts";
import {
  COMMENTS_COUNT_QUERY_KEY,
  COMMENTS_LIST_QUERY_KEY,
} from "@/app/api/comments/queryKeys.ts";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const useCommentsCount = (postId: number) => {
  const { data, isLoading } = useQuery(
    [COMMENTS_COUNT_QUERY_KEY],
    () => getCommentsCount(postId),
    {
      onSettled: () => {},
    },
  );

  return { data, isLoading };
};

export const useCommentsList = () => {
  const {
    state: { postId },
  } = useLocation();

  const { data, isLoading } = useQuery(
    [COMMENTS_LIST_QUERY_KEY],
    () => getCommentsList(postId),
    {
      onSettled: () => {},
      enabled: !!postId,
    },
  );

  return { commentsListData: data, isCommentsData: isLoading };
};

export const useCommentCreate = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth0();

  const { mutate } = useMutation(
    ({
      data,
    }: {
      data: {
        content: string;
        postId: number;
        parentId: number;
      };
      onSuccess: () => void;
    }) => createComment({ ...data, userId: user?.sub ?? "" }),
    {
      onSuccess: async (_data, { onSuccess }) => {
        await queryClient.invalidateQueries([COMMENTS_COUNT_QUERY_KEY]);
        await queryClient.invalidateQueries([COMMENTS_LIST_QUERY_KEY]);

        onSuccess();
      },
    },
  );

  return { mutateCommentCreate: mutate };
};

export const useCommentUpdate = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ({
      data,
    }: {
      data: {
        id: number;
        content?: string;
        userId?: string;
        likedByUserId?: string;
        dislikedByUserId?: string;
      };
      onSuccess: () => void;
    }) => updateComment(data),
    {
      onSuccess: async (_data, { onSuccess }) => {
        await queryClient.invalidateQueries([COMMENTS_COUNT_QUERY_KEY]);
        await queryClient.invalidateQueries([COMMENTS_LIST_QUERY_KEY]);

        onSuccess();
      },
    },
  );

  return { mutateCommentUpdate: mutate };
};

export const useCommentDelete = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ({ id, userId }: { id: number; userId: string; onSuccess: () => void }) =>
      deleteComment(id, userId),
    {
      onSuccess: async (_data, { onSuccess }) => {
        await queryClient.invalidateQueries([COMMENTS_COUNT_QUERY_KEY]);
        await queryClient.invalidateQueries([COMMENTS_LIST_QUERY_KEY]);

        onSuccess();
      },
    },
  );

  return { mutateCommentDelete: mutate };
};
