import { instance } from "@/app/api/instance/instance.ts";
import { PostType } from "@/app/types/post.ts";

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
  userId,
  tagIds,
}: {
  title: string;
  content: string;
  categoryId: number;
  userId: string;
  tagIds: number[];
}) =>
  instance.post<PostType>(`posts`, {
    title,
    content,
    categoryId,
    userId,
    tagIds,
  });
