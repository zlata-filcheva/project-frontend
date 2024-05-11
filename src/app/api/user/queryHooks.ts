import { useMutation, useQuery } from "react-query";
import { createUserData, getUserData } from "./api.ts";
import { USER_DATA_QUERY_KEY } from "@/app/api/user/queryKeys.ts";

export const useUserData = () => {
  const { data, isLoading } = useQuery(
    [USER_DATA_QUERY_KEY],
    () => getUserData(),
    {
      onSettled: () => {},
    },
  );

  return { data, isLoading };
};

export const useUserDataCreate = () => {
  const { mutate } = useMutation(
    `${USER_DATA_QUERY_KEY}`,
    ({
      data,
    }: {
      data: {
        id: string;
        nickName: string;
        name: string;
        surname: string;
      };
      onSettled: () => void;
    }) => createUserData(data),
    {
      onSettled: async (_data, _error, { onSettled }) => {
        onSettled();
      },
    },
  );

  return { mutateUserDataCreate: mutate };
};
