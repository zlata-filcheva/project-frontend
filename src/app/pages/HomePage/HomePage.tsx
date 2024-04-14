import { usePageTitle } from "../../utils/usePageTitle/usePageTitle.ts";
import { usePhotoQuery } from "../../api/photo/queryHooks.ts";

const HomePage = () => {
  usePageTitle("Home Page");

  //const { data, isLoading } = usePhotoQuery();

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
