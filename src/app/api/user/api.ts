import { instance } from "@/app/api/instance/instance.ts";
import { UserType } from "@/app/types/user.ts";

export const getUserData = async () => {
  const { data } = await instance.get<UserType>(`users`);

  return data;
};

export const createUserData = ({
  id,
  nickName,
  name,
  surname,
}: {
  id: string;
  nickName: string;
  name: string;
  surname: string;
}) => instance.post<UserType>(`users`, { id, nickName, name, surname });
