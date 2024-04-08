import { PhotosType } from "../../types/photos.ts";

export const downloadPhoto = async (): Promise<PhotosType[]> => {
  const response = await fetch(
    "https://127.0.0.1/2sd/index.php/photos/list?limit=20",
  );

  return await response.json();
};
