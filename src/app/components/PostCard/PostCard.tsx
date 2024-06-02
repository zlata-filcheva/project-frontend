import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Pencil, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PATH_NAMES } from "@/app/modules/router/routes.ts";
import { useAuth0 } from "@auth0/auth0-react";
import { PostType } from "@/app/types/post.ts";
import { usePostDelete } from "@/app/api/posts/queryHooks.ts";
import { POST_CARD_DELETE_CONFIRM_TEXT } from "@/app/components/PostCard/constants.ts";
import CommentsTotal from "@/app/components/PostCard/CommentsTotal.tsx";
import PostPageLink from "@/app/components/PostCard/PostPageLink.tsx";

const PostCard = ({ data }: { data: PostType }) => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const { mutatePostDelete } = usePostDelete();

  const isAuthor = data.user.id === user?.sub;
  const userNickname = data.user.name
    .split(" ")
    .map((value) => value[0])
    .join("");

  const handlePostEdit = () => {
    const newTagIds = data.tagList.map(({ id }) => id);
    const newData = { ...data, tagIds: newTagIds };

    navigate(PATH_NAMES.editPostPage, { state: { data: newData } });
  };

  const handlePostDelete = () => {
    if (!window.confirm(POST_CARD_DELETE_CONFIRM_TEXT)) {
      return;
    }

    mutatePostDelete({
      id: data.id,
      onSuccess: () => {
        navigate(PATH_NAMES.postsPage, { replace: true });
      },
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle
          className={"grid items-center"}
          style={{
            gridTemplateColumns: isAuthor ? "auto 1fr auto" : "auto 1fr",
          }}
        >
          <div className={"p-1"}>
            <Avatar>
              <AvatarImage src={data.user.picture} />
              <AvatarFallback>{userNickname}</AvatarFallback>
            </Avatar>
          </div>

          <PostPageLink postId={data.id} text={data.title} />

          {isAuthor && (
            <div className={"grid grid-cols-2 gap-2"}>
              <Button variant="outline" size="icon" onClick={handlePostEdit}>
                <Pencil className="h-4 w-4" />
              </Button>

              <Button variant="outline" size="icon" onClick={handlePostDelete}>
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          )}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p>{data.content}</p>
      </CardContent>

      <CardFooter className={"grid"}>
        <div className={"flex"}>
          {data.tagList.map(({ id, name }) => (
            <div className={"mr-0.5"} key={id}>
              {" "}
              <Badge key={id}>{name}</Badge>
            </div>
          ))}
        </div>

        <CommentsTotal postId={data.id} />
      </CardFooter>
    </Card>
  );
};

export default PostCard;
