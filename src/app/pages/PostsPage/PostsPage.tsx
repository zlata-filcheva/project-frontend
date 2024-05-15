import { usePageTitle } from "../../utils/usePageTitle.ts";
import PostCard from "@/app/pages/PostsPage/PostCard.tsx";
import { usePostsCount, usePostsList } from "@/app/api/posts/queryHooks.ts";
import { useState } from "react";
import {
  POST_PAGE_OFFSET,
  POST_PAGE_ROW_COUNT,
} from "@/app/pages/PostsPage/constants.ts";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination.tsx";

const PostsPage = () => {
  usePageTitle("Posts page");

  const [rowCount, setRowCount] = useState(POST_PAGE_ROW_COUNT);
  const [offset, setOffset] = useState(POST_PAGE_OFFSET);

  const { data: postsListData, isLoading: isPostsListDataLoading } =
    usePostsList({
      rowCount: rowCount.toString(),
      offset: offset.toString(),
    });
  const { data: postCountData, isLoading: isPostsCountLoading } =
    usePostsCount();

  if (isPostsListDataLoading || isPostsCountLoading) {
    return null;
  }

  if (!postsListData?.length || !postCountData?.count) {
    return null;
  }

  return (
    <>
      {postsListData.map((post) => (
        <PostCard key={post.id} data={post} />
      ))}

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default PostsPage;
