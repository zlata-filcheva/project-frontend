export type PostType = {
  id: number;
  title: string;
  content: string;
  surname: string;
  creatingDate: string;
  updateDate: string;
  categoryId: number;
  tagList: { id: number; name: string }[];
  userId: string;
};

export type PostCountType = {
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
