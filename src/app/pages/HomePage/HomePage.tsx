import { usePageTitle } from "../../utils/usePageTitle/usePageTitle.ts";
import { usePhotoQuery } from "../../api/photo/queryHooks.ts";
import { Navigate, useLocation } from "react-router-dom";
import { isEmpty } from "lodash";
import { PATH_NAMES } from "../../modules/router/routes";

const HomePage = () => {
  usePageTitle("Home Page");

  const { state } = useLocation();

  //const { data, isLoading } = usePhotoQuery();

  if (isEmpty(state?.userData)) {
    return <Navigate to={PATH_NAMES.loginPage} />;
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
      This Is Home Page
    </div>
  );
};

export default HomePage;
