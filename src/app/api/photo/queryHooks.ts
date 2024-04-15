import { useQuery } from "react-query";
import { getUser } from "../user/api";

export const useUserQuery = (email: string, password: string) => {
  const { data, isLoading } = useQuery(
    ["user"],
    () => getUser(email, password),
    { enabled: !!email.length && !!password.length },
  );

  return { data, isLoading };
};
