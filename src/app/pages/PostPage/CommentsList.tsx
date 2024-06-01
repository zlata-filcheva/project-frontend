import { useCommentsList } from "@/app/api/comments/queryHooks.ts";
import CommentItem from "@/app/pages/PostPage/CommentItem.tsx";

const CommentsList = () => {
  const { data, isLoading } = useCommentsList();

  if (isLoading || !data?.length) {
    return null;
  }

  return data.map((comment) => <CommentItem key={comment.id} data={comment} />);
};

export default CommentsList;
