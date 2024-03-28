import { PhotosType } from "../../types/photos.ts";

export const downloadPhoto = async (): Promise<PhotosType[]> => {
  const response = await fetch("/photo/list");

  return await response.json();
};
