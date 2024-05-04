import { CategoryType } from "../../types/category.ts";
import { BE_URL } from "../constants.ts";

export const getCategoriesList = async (): Promise<CategoryType[]> => {
  const url = new URL(`${BE_URL}/category/get`);

  const response = await fetch(url);

  return await response.json();
};
