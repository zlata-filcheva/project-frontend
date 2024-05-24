import LoginButton from "@/app/components/Navbar/LoginButton.tsx";
import LogoutButton from "@/app/components/Navbar/LogoutButton.tsx";
import { useAuth0 } from "@auth0/auth0-react";

const AuthButton = () => {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return null;
  }

  if (!isAuthenticated) {
    return <LoginButton />;
  }

  return <LogoutButton />;
};

export default AuthButton;
