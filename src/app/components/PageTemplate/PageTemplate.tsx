import PageTitle from "../PageTitle/PageTitle.tsx";
import { Outlet } from "react-router-dom";

const PageTemplate = () => {
  return (
    <div className={"px-3 lg:px-24"}>
      <PageTitle />

      <Outlet />
    </div>
  );
};

export default PageTemplate;
