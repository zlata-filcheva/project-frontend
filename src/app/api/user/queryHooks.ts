import { useMutation } from "react-query";
import { updateUserData } from "./api.ts";

export const useUserDataUpdate = () => {
  const { mutate } = useMutation(
    ({
      data,
    }: {
      data: {
        id: string;
        name: string;
        picture: string;
      };
      onSettled: () => void;
    }) => updateUserData(data),
    {
      onSettled: async (_data, _error, { onSettled }) => {
        onSettled();
      },
    },
  );

  return { mutateUserDataUpdate: mutate };
};
