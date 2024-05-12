import { usePageTitle } from "../../utils/usePageTitle.ts";
import PostCard from "@/app/pages/PostsPage/PostCard.tsx";
import { usePostsList } from "@/app/api/posts/queryHooks.ts";

const PostsPage = () => {
  usePageTitle("Posts page");

  const { data, isLoading } = usePostsList();

  if (isLoading) {
    return null;
  }

  return <PostCard title={"Post"} />;
};

export default PostsPage;
