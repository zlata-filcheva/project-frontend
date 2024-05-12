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

const PostCard = ({
  title,
  content,
  tags,
}: {
  title: string;
  content: string;
  tags: { id: number; name: string }[];
}) => (
  <Card>
    <CardHeader>
      <CardTitle
        className={"grid items-center"}
        style={{ gridTemplateColumns: "45px 1fr" }}
      >
        <Avatar>
          <AvatarImage src={"https://github.com/shadcnfff.png"} />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>

        {title}
      </CardTitle>
    </CardHeader>

    <CardContent>
      <p>{content}</p>
    </CardContent>

    <CardFooter className={"flex justify-between"}>
      <p>
        {tags.map(({ id, name }) => (
          <Badge key={id}>{name}</Badge>
        ))}
      </p>

      <p>Comments data</p>
    </CardFooter>
  </Card>
);

export default PostCard;
