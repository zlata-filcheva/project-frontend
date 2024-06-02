import PageTitle from "../PageTitle/PageTitle.tsx";
import { Outlet } from "react-router-dom";
import PageBreadcrumbs from "@/app/components/PageBreadcrumbs/PageBreadcrumbs.tsx";

const PageTemplate = () => {
  return (
    <div className={"px-3 lg:px-24"}>
      <PageTitle />

      <PageBreadcrumbs />

      <Outlet />
    </div>
  );
};

export default PageTemplate;
