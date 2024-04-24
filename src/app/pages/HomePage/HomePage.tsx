import { usePageTitle } from "../../utils/usePageTitle/usePageTitle.ts";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../../components/Login/LogoutButton.tsx";

const HomePage = () => {
  usePageTitle("Home Page");

  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    loginWithRedirect().then();
  }

  return (
    <div
      style={{
        padding: "1rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",
      }}
    >
      <div>This Is Home Page</div>

      <div style={{ textAlign: "right" }}>
        <LogoutButton />
      </div>
    </div>
  );
};

export default HomePage;
