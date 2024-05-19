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
