import { instance } from "@/app/api/instance/instance.ts";
import {
  CreatePostProps,
  EditPostProps,
  PostsCountType,
  PostType,
} from "@/app/types/post.ts";

export const getPost = async (id: string) => {
  const { data } = await instance.get<PostType>(`posts/${id}`);

  return data;
};

export const getPostsList = async ({
  rowCount,
  offset,
}: {
  rowCount: string;
  offset: string;
}) => {
  const { data } = await instance.get<PostType[]>(`posts`, {
    params: {
      rowCount,
      offset,
    },
  });

  return data;
};

export const createPost = ({
  title,
  content,
  categoryId,
  tagIds,
  userId,
}: CreatePostProps) =>
  instance.post<PostType>(`posts`, {
    title,
    content,
    categoryId,
    tagIds,
    userId,
  });

export const updatePost = ({
  title,
  content,
  categoryId,
  tagIds,
  id,
  userId,
}: EditPostProps) =>
  instance.put<PostType>(`posts/${id}`, {
    title,
    content,
    categoryId,
    tagIds,
    userId,
  });

export const deletePost = ({ id, userId }: { id: number; userId: string }) =>
  instance.delete<"Post has been deleted">(`posts/${id}`, {
    data: { userId },
  });

export const getPostsCount = async (rowCount: string) => {
  const { data } = await instance.get<PostsCountType>(`posts/count`, {
    params: { rowCount },
  });

  return data;
};
