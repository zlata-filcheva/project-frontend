import { usePageTitle } from "@/app/utils/usePageTitle.ts";
import { useLocation } from "react-router-dom";
import PostCard from "@/app/components/PostCard/PostCard.tsx";
import { usePost } from "@/app/api/posts/queryHooks.ts";
import { isEmpty } from "lodash";

const PostPage = () => {
  usePageTitle("Post page");

  const {
    state: { id },
  } = useLocation();

  const { data, isLoading } = usePost(id);

  if (isLoading) {
    return null;
  }

  if (isEmpty(data)) {
    return null;
  }

  return <PostCard data={data} />;
};

export default PostPage;
