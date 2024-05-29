import { instance } from "@/app/api/instance/instance.ts";
import { CommentsCountType, CommentType } from "@/app/types/comments.ts";

export const getCommentsCount = async () => {
  const { data } = await instance.get<CommentsCountType>(`comments/count`);

  return data;
};

export const getCommentsList = async (postId: number) => {
  const params = new URLSearchParams();

  params.append("postId", postId.toString());

  const { data } = await instance.get<CommentsCountType>(`comments`, {
    params,
  });

  return data;
};

export const createComment = (postId: number) =>
  instance.post<CommentType[]>(`comments`, {
    postId,
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
  const url = new URL("comments");

  url.searchParams.append("id", id.toString());

  return instance.patch<CommentType>(url.toString(), {
    ...(!!content?.length && { content }),
    ...(!!userId?.length && { userId }),
    ...(!!likedByUserId?.length && { likedByUserId }),
    ...(!!dislikedByUserId?.length && { dislikedByUserId }),
  });
};

export const deleteComment = (id: number) => {
  const params = new URLSearchParams();

  params.append("id", id.toString());

  return instance.delete<"Comment has been deleted">(`comments`, {
    params,
  });
};
