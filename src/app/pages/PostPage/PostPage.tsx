import { usePageTitle } from "../../utils/usePageTitle/usePageTitle.ts";
import LogoutButton from "../../components/Login/LogoutButton.tsx";

const PostPage = () => {
  usePageTitle("Post page");

  return (
    <div
      style={{
        padding: "1rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",
      }}
    >
      <div>This Is Home Page</div>

      <div style={{ textAlign: "right" }}>
        <LogoutButton />
      </div>
    </div>
  );
};

export default PostPage;
