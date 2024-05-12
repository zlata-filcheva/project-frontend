import { useQuery } from "react-query";
import { getPostsList } from "./api.ts";
import { POSTS_LIST_QUERY_KEY } from "@/app/api/posts/queryKeys.ts";

export const usePostsList = () => {
  const { data, isLoading } = useQuery(
    [POSTS_LIST_QUERY_KEY],
    () => getPostsList(),
    {
      onSettled: () => {},
    },
  );

  return { data, isLoading };
};

/*
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
        await queryClient.invalidateQueries([POSTS_LIST_QUERY_KEY]);

        onSettled();
      },
    },
  );

  return { mutateUserDataCreate: mutate };
};

 */
