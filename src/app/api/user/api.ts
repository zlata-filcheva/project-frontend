import { PhotosType } from "../../types/category.ts";

export const getUser = async (
  email: string,
  password: string,
): Promise<PhotosType[]> => {
  const url = new URL("https://127.0.0.1/project-backend/index.php/user/check");

  url.searchParams.append("email", email);
  url.searchParams.append("password", password);

  const response = await fetch(url);

  return await response.json();
};
