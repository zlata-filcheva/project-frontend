import { instance } from "@/app/api/instance/instance.ts";
import { CommentsCountType, CommentType } from "@/app/types/comments.ts";

export const getCommentsCount = async (postId: number) => {
  const params = new URLSearchParams();

  params.append("postId", postId.toString());

  const { data } = await instance.get<CommentsCountType>(`comments/count`, {
    params,
  });

  return data;
};

export const getCommentsList = async (postId: string) => {
  const params = new URLSearchParams();

  params.append("postId", postId);

  const { data } = await instance.get<CommentType[]>(`comments`, {
    params,
  });

  return data;
};

export const createComment = ({
  content,
  postId,
  userId,
  parentId,
}: {
  content: string;
  postId: number;
  userId: string;
  parentId: number;
}) =>
  instance.post<CommentType>(`comments`, {
    content,
    postId,
    userId,
    parentId,
  });

export const updateComment = ({
  id,
  content,
  userId,
  likedByUserId,
  dislikedByUserId,
}: {
  id: number;
  content?: string;
  userId?: string;
  likedByUserId?: string;
  dislikedByUserId?: string;
}) => {
  return instance.patch<CommentType>(`comments/${id}`, {
    ...(!!content?.length && { content }),
    ...(!!userId?.length && { userId }),
    ...(!!likedByUserId?.length && { likedByUserId }),
    ...(!!dislikedByUserId?.length && { dislikedByUserId }),
  });
};

export const deleteComment = (id: number, userId: string) =>
  instance.delete<"Comment has been deleted">(`comments/${id}`, {
    data: { userId },
  });
