import { useDocumentTitle } from "../../utils/useDocumentTitle.ts";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../../components/Navbar/LogoutButton.tsx";

const HomePage = () => {
  useDocumentTitle("Home page");

  const { isAuthenticated, isLoading, loginWithRedirect, user } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    loginWithRedirect().then();
  }

  console.log(user);

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
