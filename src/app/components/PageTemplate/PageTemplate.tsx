import { ReactElement } from "react";
import PageTitle from "../PageTitle/PageTitle.tsx";

const PageTemplate = ({ children }: { children: ReactElement }) => {
  return (
    <div className={"px-3 lg:px-24"}>
      <PageTitle />

      {children}
    </div>
  );
};

export default PageTemplate;
