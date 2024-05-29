export type CommentsCountType = {
  commentsTotal: number;
};

export type CommentType = {
  id: number;
  userId: string;
  content: string;
  likedBy: string[];
  dislikedBy: string[];
  postId: number;
  parentId: number;
};
