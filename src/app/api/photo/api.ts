import { PhotosType } from "../../types/photos.ts";

export const downloadPhoto = async (): Promise<PhotosType[]> => {
  const response = await fetch(
    "http://localhost/2sd/index.php/photo/list?limit=20",
  );

  return await response.json();
};
