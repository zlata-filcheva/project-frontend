import { useQuery } from "react-query";
import { getUser } from "./api.ts";

export const useUserQuery = ({
  email,
  password,
  isLogging,
  setIsLogging,
}: {
  email: string;
  password: string;
  isLogging: boolean;
  setIsLogging: any;
}) => {
  const { data, isLoading } = useQuery(
    ["user"],
    () => getUser(email, password),
    {
      enabled: isLogging,
      onSettled: () => {
        setIsLogging(false);
      },
    },
  );

  return { data, isLoading };
};
