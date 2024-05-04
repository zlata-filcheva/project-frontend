import { usePageTitle } from "../../utils/usePageTitle/usePageTitle.ts";
import Navbar from "../../components/Navbar/Navbar.tsx";

const PostsPage = () => {
  usePageTitle("Posts page");

  return <Navbar />;
};

export default PostsPage;
