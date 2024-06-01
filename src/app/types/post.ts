import { UserType } from "@/app/types/user.ts";
import { TagType } from "@/app/types/tag.ts";

export type PostType = {
  id: number;
  title: string;
  content: string;
  creationDate: string;
  updateDate: string;
  categoryId: number;
  tagList: TagType[];
  user: UserType;
};

export type PostsCountType = {
  pagesTotal: number;
};

export type CreatePostProps = {
  title: string;
  content: string;
  categoryId: number;
  tagIds: number[];
  userId: string;
};

export type EditPostProps = {
  title: string;
  content: string;
  categoryId: number;
  tagIds: number[];
  id: number;
  userId: string;
};
