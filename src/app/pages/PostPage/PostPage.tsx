import { useDocumentTitle } from "@/app/utils/useDocumentTitle.ts";
import { useLocation } from "react-router-dom";
import PostCard from "@/app/components/PostCard/PostCard.tsx";
import { usePost } from "@/app/api/posts/queryHooks.ts";
import { isEmpty } from "lodash";
import { Input } from "@/components/ui/input.tsx";
import { useState } from "react";
import { POST_PAGE_COMMENT_PLACEHOLDER } from "@/app/pages/PostPage/constants.ts";

const PostPage = () => {
  useDocumentTitle("Post page");

  const {
    state: { id },
  } = useLocation();
  const { data, isLoading } = usePost(id);

  const [comment, setComment] = useState("");

  if (isLoading) {
    return null;
  }

  if (isEmpty(data)) {
    return null;
  }

  return (
    <>
      <PostCard data={data} />

      <Input
        className={"my-2"}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder={POST_PAGE_COMMENT_PLACEHOLDER}
      />
    </>
  );
};

export default PostPage;
