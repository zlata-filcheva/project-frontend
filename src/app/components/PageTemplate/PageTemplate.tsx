import { ReactElement } from "react";
import PageTitle from "../PageTitle/PageTitle.tsx";

const PageTemplate = ({ children }: { children: ReactElement }) => {
  return (
    <div style={{ padding: "1rem" }}>
      <PageTitle title={document.title} />

      {children}
    </div>
  );
};

export default PageTemplate;
