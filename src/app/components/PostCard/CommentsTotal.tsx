import { useCommentsCount } from "@/app/api/comments/queryHooks.ts";
import { MessageSquareText } from "lucide-react";

const CommentsTotal = ({ postId }: { postId: number }) => {
  const { data, isLoading } = useCommentsCount(postId);

  if (isLoading) {
    return null;
  }

  return (
    <div className={"grid grid-flow-col auto-cols-max align-middle mt-2"}>
      <div className={"pr-2"}>
        <MessageSquareText />
      </div>
      <div>
        {" "}
        {data?.commentsTotal}{" "}
        {data?.commentsTotal !== 0 ? "comments" : "comment"}
      </div>
    </div>
  );
};

export default CommentsTotal;
