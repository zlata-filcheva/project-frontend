import { useMutation } from "react-query";
import { updateUserData } from "./api.ts";
import { useAuth0 } from "@auth0/auth0-react";

export const useUserDataUpdate = () => {
  const { user } = useAuth0();

  const userData = {
    id: user?.sub ?? "",
    name: user?.name ?? "",
    picture: user?.picture ?? "",
  };

  const { mutate } = useMutation(
    // eslint-disable-next-line no-empty-pattern
    ({}: { onSettled: () => void }) => updateUserData(userData),
    {
      onSettled: async (_data, _error, { onSettled }) => {
        onSettled();
      },
    },
  );

  return { mutateUserDataUpdate: mutate };
};
