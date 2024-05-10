import { CategoryType } from "../../types/category.ts";
import { BE_URL } from "../constants.ts";
import { fetchInstance } from "@/app/modules/fetchInstance/fetchInstance.ts";

export const getCategoriesList = async (): Promise<CategoryType[]> => {
  const url = new URL(`${BE_URL}/categories`);

  const response = await fetch(url);

  return await response.json();
};

export const createCategory = async ({
  category,
  description,
}: {
  category: string;
  description: string;
}) => {
  await fetchInstance.post(`${BE_URL}/categories`, {
    category,
    description,
  });
};
