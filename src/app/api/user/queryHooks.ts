import { useMutation, useQuery, useQueryClient } from "react-query";
import { createUserData, getUserData } from "./api.ts";
import { USER_DATA_QUERY_KEY } from "@/app/api/user/queryKeys.ts";

export const useUserData = (id: string) => {
  const { data, isLoading } = useQuery(
    [USER_DATA_QUERY_KEY],
    () => getUserData(id),
    {
      onSettled: () => {},
    },
  );

  return { data, isLoading };
};

export const useUserDataCreate = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ({
      data,
    }: {
      data: {
        id: string;
        nickname: string;
        name: string;
        surname: string;
      };
      onSettled: () => void;
    }) => createUserData(data),
    {
      onSettled: async (_data, _error, { onSettled }) => {
        await queryClient.invalidateQueries([USER_DATA_QUERY_KEY]);

        onSettled();
      },
    },
  );

  return { mutateUserDataCreate: mutate };
};
