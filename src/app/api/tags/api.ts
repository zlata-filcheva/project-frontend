import { instance } from "@/app/api/instance/instance.ts";
import { TagType } from "@/app/types/tag.ts";

export const getTagsList = async () => {
  const { data } = await instance.get<TagType[]>(`tags`);

  return data;
};

export const createTags = (tags: string[]) =>
  instance.post<TagType>(`tags`, { tags });
