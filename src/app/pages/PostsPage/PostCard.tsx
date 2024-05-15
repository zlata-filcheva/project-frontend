import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PATH_NAMES } from "@/app/modules/router/routes.ts";
import { useAuth0 } from "@auth0/auth0-react";
import { PostType } from "@/app/types/post.ts";

const PostCard = ({ data }: { data: PostType }) => {
  const navigate = useNavigate();
  const { user } = useAuth0();

  const isAuthor = data?.userId === user?.sub;

  const handleEditButtonClick = () => {
    navigate(PATH_NAMES.editPostPage, { state: { data } });
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
              <AvatarImage src={"https://github.com/shadcnfff.png"} />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>

          <div>{data.title}</div>

          {isAuthor && (
            <div>
              <Button
                variant="outline"
                size="icon"
                onClick={handleEditButtonClick}
              >
                <Pencil className="h-4 w-4" />
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
            <div className={"mr-0.5"}>
              {" "}
              <Badge key={id}>{name}</Badge>
            </div>
          ))}
        </div>

        <div>Comments data</div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
