import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton.tsx";

const Profile = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    loginWithRedirect().then();
  }

  return (
    <div>
      <img src={user?.picture} alt={user?.name} />
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>

      <LogoutButton />
    </div>
  );
};

export default Profile;
