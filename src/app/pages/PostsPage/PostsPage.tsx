import { usePageTitle } from "../../utils/usePageTitle.ts";
import PostCard from "@/app/pages/PostsPage/PostCard.tsx";
import { usePostsList } from "@/app/api/posts/queryHooks.ts";
import { useState } from "react";
import {
  POST_PAGE_OFFSET,
  POST_PAGE_ROW_COUNT,
} from "@/app/pages/PostsPage/constants.ts";

const PostsPage = () => {
  usePageTitle("Posts page");

  const [rowCount, setRowCount] = useState(POST_PAGE_ROW_COUNT);
  const [offset, setOffset] = useState(POST_PAGE_OFFSET);

  const { data, isLoading } = usePostsList({
    rowCount: rowCount.toString(),
    offset: offset.toString(),
  });

  if (isLoading) {
    return null;
  }

  if (!data?.length) {
    return null;
  }

  return data.map(({ title, content, tagList }) => (
    <PostCard title={title} content={content} tags={tagList} />
  ));
};

export default PostsPage;
