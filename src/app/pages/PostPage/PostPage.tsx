import { useDocumentTitle } from "@/app/utils/useDocumentTitle.ts";
import PostCard from "@/app/components/PostCard/PostCard.tsx";
import { usePost } from "@/app/api/posts/queryHooks.ts";
import { isEmpty } from "lodash";
import { useState } from "react";
import {
  useCommentCreate,
  useCommentsList,
} from "@/app/api/comments/queryHooks.ts";
import CommentAnswer from "@/app/components/CommentAnswer/CommentAnswer.tsx";
import { POST_PAGE_COMMENT_CREATE_BUTTON_TEXT } from "@/app/pages/PostPage/constants.ts";
import { useAuth0 } from "@auth0/auth0-react";
import CommentItem from "@/app/pages/PostPage/CommentItem.tsx";

const PostPage = () => {
  useDocumentTitle("Post page");

  const { isAuthenticated } = useAuth0();

  const { postData, isPostDataLoading } = usePost();
  const { commentsListData } = useCommentsList();
  const { mutateCommentCreate } = useCommentCreate();

  const [comment, setComment] = useState("");

  const handleCommentPublish = () => {
    if (!comment.length) {
      return;
    }

    mutateCommentCreate({
      data: { content: comment, postId: postData?.id ?? 0, parentId: 0 },
      onSuccess: () => {
        setComment("");
      },
    });
  };

  if (isPostDataLoading || isEmpty(postData)) {
    return null;
  }

  return (
    <>
      <PostCard data={postData} />

      {isAuthenticated && (
        <CommentAnswer
          value={comment}
          onChange={setComment}
          onSubmit={handleCommentPublish}
          buttonText={POST_PAGE_COMMENT_CREATE_BUTTON_TEXT}
        />
      )}

      {!!commentsListData?.length && (
        <div className={"mt-2"}>
          {commentsListData.map((comment) => (
            <CommentItem key={comment.id} data={comment} />
          ))}
        </div>
      )}
    </>
  );
};

export default PostPage;
