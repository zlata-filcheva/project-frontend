import Navbar from "../Navbar/Navbar.tsx";
import { Outlet } from "react-router-dom";
import PageTemplate from "../PageTemplate/PageTemplate.tsx";
import { useAuth0 } from "@auth0/auth0-react";

const PageLayout = () => {
  const { isLoading } = useAuth0();

  if (isLoading && import.meta.env.MODE !== "development") {
    return "Loading ...";
  }

  return (
    <>
      <header>
        <Navbar />
      </header>

      <PageTemplate>
        <Outlet />
      </PageTemplate>
    </>
  );
};

export default PageLayout;
