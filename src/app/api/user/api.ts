import { instance } from "@/app/api/instance/instance.ts";
import { UserType } from "@/app/types/user.ts";

export const updateUserData = async ({
  id,
  name,
  picture,
}: {
  id: string;
  name: string;
  picture: string;
}) => instance.put<UserType>(`users`, { id, name, picture });
