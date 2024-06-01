import { useDocumentTitle } from "@/app/utils/useDocumentTitle.ts";
import PostCard from "@/app/components/PostCard/PostCard.tsx";
import { usePost } from "@/app/api/posts/queryHooks.ts";
import { isEmpty } from "lodash";
import { Input } from "@/components/ui/input.tsx";
import { useState } from "react";
import {
  POST_PAGE_COMMENT_PLACEHOLDER,
  POST_PAGE_COMMENT_SUBMIT_BUTTON_TEXT,
} from "@/app/pages/PostPage/constants.ts";
import { Button } from "@/components/ui/button.tsx";
import CommentsList from "@/app/pages/PostPage/CommentsList.tsx";

const PostPage = () => {
  useDocumentTitle("Post page");

  const { data, isLoading } = usePost();

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

      <div className="flex w-full items-center space-x-2 my-2">
        <Input
          className={"my-2"}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder={POST_PAGE_COMMENT_PLACEHOLDER}
        />
        <Button>{POST_PAGE_COMMENT_SUBMIT_BUTTON_TEXT}</Button>
      </div>

      <CommentsList />
    </>
  );
};

export default PostPage;
