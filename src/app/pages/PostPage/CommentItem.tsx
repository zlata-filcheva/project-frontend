import { CommentType } from "@/app/types/comments.ts";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";
import { CircleChevronDown, CircleChevronUp, Pencil } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import { useCommentUpdate } from "@/app/api/comments/queryHooks.ts";

const CommentItem = ({ data }: { data: CommentType }) => {
  const { user, isAuthenticated } = useAuth0();

  const { mutateCommentUpdate } = useCommentUpdate();

  const userNickname = data.user.name
    .split(" ")
    .map((value) => value[0])
    .join("");
  const isAuthor = data.user.id === user?.sub;
  const dislikeClassName = (() => {
    if (!isAuthenticated) {
      return "";
    }

    if (data.isDisliked) {
      return "text-red-600";
    }

    if (!isAuthor) {
      return "hover:text-red-600";
    }

    return "";
  })();
  const likeClassName = (() => {
    if (!isAuthenticated) {
      return "";
    }

    if (data.isLiked) {
      return "text-cyan-600";
    }

    if (!isAuthor) {
      return "hover:text-cyan-600";
    }

    return "";
  })();

  const handleDislikeAdd = () => {
    if (data.isDisliked) {
      return;
    }

    mutateCommentUpdate({
      data: { id: data.id, dislikedByUserId: user?.sub ?? "" },
      onSuccess: () => {},
    });
  };

  const handleLikeAdd = () => {
    if (data.isLiked) {
      return;
    }

    mutateCommentUpdate({
      data: { id: data.id, likedByUserId: user?.sub ?? "" },
      onSuccess: () => {},
    });
  };

  return (
    <>
      <div className={"grid grid-flow-col auto-cols-max items-center gap-2"}>
        {isAuthenticated && (
          <div className={dislikeClassName}>
            <CircleChevronDown onClick={handleDislikeAdd} />
          </div>
        )}

        <div>{data.count.likedBy - data.count.dislikedBy}</div>

        {isAuthenticated && (
          <div className={likeClassName}>
            <CircleChevronUp onClick={handleLikeAdd} />
          </div>
        )}

        <div>
          <Avatar>
            <AvatarImage src={data.user.picture} />
            <AvatarFallback>{userNickname}</AvatarFallback>
          </Avatar>
        </div>

        <div>{data.user.name}</div>

        <div>{data.updateDate}</div>

        {isAuthenticated && isAuthor && (
          <div>
            <Pencil />
          </div>
        )}
      </div>

      <div className={"my-2"}>{data.content}</div>

      {isAuthenticated && (
        <div className={"text-blue-600 hover:text-green-600"}>Answer</div>
      )}
    </>
  );
};

export default CommentItem;
