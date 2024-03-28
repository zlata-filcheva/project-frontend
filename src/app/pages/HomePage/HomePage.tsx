import { usePageTitle } from "../../utils/usePageTitle/usePageTitle.ts";
import { usePhotoQuery } from "../../api/photo/queryHooks.ts";

const HomePage = () => {
  usePageTitle("Home Page");

  const { data, isLoading } = usePhotoQuery();

  if (isLoading) {
    return (
      <div style={{ padding: "1rem" }}>
        Await page loading. Page will be updated soon
      </div>
    );
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
      {data?.map(({ name, id, description, publishDate, userLogin }) => (
        <div key={id}>
          <p>{name}</p>
          <img src={"kebab.png"} alt={name} />
          <p>{description}</p>
          <p>{userLogin}</p>
          <p>{publishDate}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
