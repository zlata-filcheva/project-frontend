import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { PATH_NAMES } from "@/app/modules/router/routes.ts";

const AuthenticationRouter = () => {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return null;
  }

  if (isAuthenticated) {
    return <Navigate to={PATH_NAMES.postsPage} replace={true} />;
  }

  return <Navigate to={PATH_NAMES.postsPage} replace={true} />;
};

export default AuthenticationRouter;
