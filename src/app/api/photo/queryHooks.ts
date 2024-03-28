import { useQuery } from "react-query";
import { downloadPhoto } from "./api.ts";

export const usePhotoQuery = () => {
  const { data, isLoading } = useQuery(["photo-list"], downloadPhoto);

  return { data, isLoading };
};
