import { instance } from "@/app/api/instance/instance.ts";
import { UserType } from "@/app/types/user.ts";

export const getPostsList = async () => {
  const { data } = await instance.get<UserType>(`posts`);

  return data;
};

/*
export const createUserData = ({
  id,
  nickname,
  name,
  surname,
}: {
  id: string;
  nickname: string;
  name: string;
  surname: string;
}) => instance.post<UserType>(`users`, { id, nickname, name, surname });

 */
