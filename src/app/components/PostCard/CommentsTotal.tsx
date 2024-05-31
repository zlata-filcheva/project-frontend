import { useCommentsCount } from "@/app/api/comments/queryHooks.ts";
import { MessageSquareText } from "lucide-react";
import PostPageLink from "@/app/components/PostCard/PostPageLink.tsx";

const CommentsTotal = ({ postId }: { postId: number }) => {
  const { data, isLoading } = useCommentsCount(postId);

  const commentsText = `${data?.commentsTotal} ${data?.commentsTotal !== 1 ? "comments" : "comment"}`;

  if (isLoading) {
    return null;
  }

  return (
    <div className={"grid grid-flow-col auto-cols-max align-middle mt-2"}>
      <div className={"pr-2"}>
        <MessageSquareText />
      </div>
      <div>
        <PostPageLink text={commentsText} postId={postId} />
      </div>
    </div>
  );
};

export default CommentsTotal;
