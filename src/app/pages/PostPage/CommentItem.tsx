import { CommentType } from "@/app/types/comments.ts";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";
import { ThumbsDown, ThumbsUp } from "lucide-react";

const CommentItem = ({ data }: { data: CommentType }) => {
  const userNickname = data.user.name
    .split(" ")
    .map((value) => value[0])
    .join("");

  return (
    <div className={"grid grid-flow-col auto-cols-max"}>
      <div>
        <div>
          <Avatar>
            <AvatarImage src={data.user.picture} />
            <AvatarFallback>{userNickname}</AvatarFallback>
          </Avatar>
        </div>

        <div>{data.updateDate}</div>
      </div>

      <div>
        <div>
          <ThumbsDown />
          {data.count.dislikedBy}
        </div>

        <div>{data.content}</div>

        <div>
          <ThumbsUp />
          {data.count.likedBy}
        </div>

        <div>Answer</div>
      </div>
    </div>
  );
};

export default CommentItem;
