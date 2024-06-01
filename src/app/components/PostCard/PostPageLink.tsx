import { Link, useLocation } from "react-router-dom";
import { PATH_NAMES } from "@/app/modules/router/routes.ts";
import { POST_CARD_STYLES } from "@/app/components/PostCard/styles.ts";

const PostPageLink = ({ text, postId }: { text: string; postId: number }) => {
  const { pathname } = useLocation();

  const isPostsPage = PATH_NAMES.postsPage === pathname;

  if (!isPostsPage) {
    return text;
  }

  return (
    <Link
      to={PATH_NAMES.postPage}
      state={{ postId: postId }}
      className={POST_CARD_STYLES.link.highlighted}
    >
      {text}
    </Link>
  );
};

export default PostPageLink;
