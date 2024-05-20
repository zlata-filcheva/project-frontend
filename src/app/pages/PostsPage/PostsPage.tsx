import { usePageTitle } from "../../utils/usePageTitle.ts";
import PostCard from "@/app/pages/PostsPage/PostCard.tsx";
import { usePostsCount, usePostsList } from "@/app/api/posts/queryHooks.ts";
import PostsPagePagination from "@/app/pages/PostsPage/PostsPagePagination.tsx";
import PageItems from "@/app/pages/PostsPage/PageItems.tsx";
import {
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination.tsx";
import { isEmpty } from "lodash";
import type { RenderPageLinkType } from "@/app/types/page.ts";

const PostsPage = () => {
  usePageTitle("Posts page");

  const {
    data: postsListData,
    isLoading: isPostsListLoading,
    page,
    setPage,
  } = usePostsList();
  const { data: postsCountData, isLoading: isPostsCountLoading } =
    usePostsCount();

  if (isPostsListLoading || isPostsCountLoading) {
    return;
  }

  if (!postsListData?.length || isEmpty(postsCountData)) {
    return null;
  }

  return (
    <>
      {postsListData.map((post) => (
        <div className={"mb-4"} key={post.id}>
          <PostCard data={post} />
        </div>
      ))}

      <PostsPagePagination
        pagesTotal={postsCountData.pagesTotal}
        page={page}
        onPageChange={setPage}
      >
        <PageItems
          pagesTotal={postsCountData.pagesTotal}
          page={page}
          onPageChange={setPage}
          renderPageLink={({
            isActive,
            onClick,
            pageNumber,
          }: RenderPageLinkType) => (
            <PaginationItem onClick={onClick}>
              <PaginationLink isActive={isActive}>{pageNumber}</PaginationLink>
            </PaginationItem>
          )}
          renderPageEllipsis={
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          }
        />
      </PostsPagePagination>
    </>
  );
};

export default PostsPage;
