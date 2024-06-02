import { UserType } from "@/app/types/user.ts";

export type CommentsCountType = {
  commentsTotal: number;
};

export type CommentType = {
  id: number;
  content: string;
  count: { likedBy: number; dislikedBy: number };
  postId: number;
  parentId: number;
  user: UserType;
  creationDate: string;
  updateDate: string;
  isLiked: boolean;
  isDisliked: boolean;
};
