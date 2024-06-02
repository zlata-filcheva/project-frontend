import Navbar from "../Navbar/Navbar.tsx";
import PageTemplate from "../PageTemplate/PageTemplate.tsx";
import { Navigate, useLocation } from "react-router-dom";
import { PATH_NAMES } from "@/app/modules/router/routes.ts";

const PageLayout = () => {
  const { pathname } = useLocation();

  if (pathname === PATH_NAMES.homePage) {
    return <Navigate to={PATH_NAMES.postsPage} replace={true} />;
  }

  return (
    <>
      <header>
        <Navbar />
      </header>

      <PageTemplate />
    </>
  );
};

export default PageLayout;
