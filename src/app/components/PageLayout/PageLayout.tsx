import Navbar from "../Navbar/Navbar.tsx";
import { Outlet } from "react-router-dom";
import PageTemplate from "../PageTemplate/PageTemplate.tsx";

const PageLayout = () => {
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
