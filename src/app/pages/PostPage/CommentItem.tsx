import { CommentType } from "@/app/types/comments.ts";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";
import {
  CircleChevronDown,
  CircleChevronUp,
  Pencil,
  Trash,
} from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  useCommentDelete,
  useCommentUpdate,
} from "@/app/api/comments/queryHooks.ts";
import { Button } from "@/components/ui/button.tsx";
import { useMemo, useState } from "react";
import CommentAnswer from "@/app/components/CommentAnswer/CommentAnswer.tsx";
import {
  COMMENT_ITEM_COMMENT_UPDATE_BUTTON_TEXT,
  COMMENT_ITEM_DELETE_CONFIRM,
} from "@/app/pages/PostPage/constants.ts";

const CommentItem = ({ data }: { data: CommentType }) => {
  const { user, isAuthenticated } = useAuth0();

  const { mutateCommentUpdate } = useCommentUpdate();
  //const { mutateCommentCreate } = useCommentCreate();
  const { mutateCommentDelete } = useCommentDelete();

  const [comment, setComment] = useState(data.content);
  //const [isAnswering, setIsAnswering] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const userNickname = data.user.name
    .split(" ")
    .map((value) => value[0])
    .join("");
  const isAuthor = data.user.id === user?.sub;
  const dislikeClassName = useMemo(() => {
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
  }, [isAuthenticated, data.isDisliked, isAuthor]);
  const likeClassName = useMemo(() => {
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
  }, [isAuthenticated, data.isLiked, isAuthor]);

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

  /*
  const handleAnswerPublish = () => {
    if (!comment.length) {
      return;
    }

    mutateCommentCreate({
      data: { content: comment, postId: data.postId, parentId: data.id },
      onSuccess: () => {
        setIsAnswering(false);
        setComment("");
      },
    });
  };
   */

  /*
  const handleAnswerCancel = () => {
    setIsAnswering(!isAnswering);
    setComment("");
  };
   */

  const handleCommentContentUpdate = () => {
    if (!comment.length) {
      return;
    }

    mutateCommentUpdate({
      data: { id: data.id, userId: user?.sub ?? "", content: comment },
      onSuccess: () => {
        setIsEditing(false);
        setComment("");
      },
    });
  };

  const handleCommentDelete = () => {
    if (!window.confirm(COMMENT_ITEM_DELETE_CONFIRM)) {
      return;
    }

    mutateCommentDelete({
      id: data.id,
      userId: user?.sub ?? "",
      onSuccess: () => {},
    });
  };

  return (
    <>
      <div className={"grid grid-flow-col auto-cols-max items-center gap-2"}>
        {isAuthenticated && !isAuthor && (
          <div className={dislikeClassName}>
            <CircleChevronDown onClick={handleDislikeAdd} />
          </div>
        )}

        <div>{data.count.likedBy - data.count.dislikedBy}</div>

        {isAuthenticated && !isAuthor && (
          <div className={likeClassName}>
            <CircleChevronUp onClick={handleLikeAdd} />
          </div>
        )}

        <div>
          <Avatar className="h-4 w-4">
            <AvatarImage src={data.user.picture} />
            <AvatarFallback>{userNickname}</AvatarFallback>
          </Avatar>
        </div>

        <div>{data.user.name}</div>

        <div>{data.updateDate}</div>

        {isAuthenticated && isAuthor && (
          <div>
            <Button variant={"ghost"}>
              <Pencil
                className="h-4 w-4"
                onClick={() => setIsEditing(!isEditing)}
              />
            </Button>

            <Button variant={"ghost"}>
              <Trash className="h-4 w-4" onClick={handleCommentDelete} />
            </Button>
          </div>
        )}
      </div>

      <div className={"my-2"}>{data.content}</div>

      {/*
      {isAuthenticated && (
        <div
          className={`${!isAnswering ? "text-blue-600" : "text-red-600"} hover:text-cyan-700`}
          onClick={handleAnswerCancel}
        >
          {!isAnswering ? "Answer" : "Cancel"}
        </div>
      )}

      {isAuthenticated && isAnswering && (
        <CommentAnswer
          value={comment}
          onChange={setComment}
          onSubmit={handleAnswerPublish}
        />
      )}
      */}

      {isAuthenticated && isEditing && (
        <CommentAnswer
          value={comment}
          onChange={setComment}
          onSubmit={handleCommentContentUpdate}
          buttonText={COMMENT_ITEM_COMMENT_UPDATE_BUTTON_TEXT}
        />
      )}
    </>
  );
};

export default CommentItem;
