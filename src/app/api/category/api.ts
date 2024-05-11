import { CategoryType } from "../../types/category.ts";
import { instance } from "@/app/api/instance/instance.ts";

export const getCategoriesList = async () => {
  const { data } = await instance.get<CategoryType[]>(`categories`);

  return data;
};

export const createCategory = ({
  category,
  description,
}: {
  category: string;
  description: string;
}) => instance.post<CategoryType>(`categories`, { category, description });
