import { usePageTitle } from "../../utils/usePageTitle.ts";
import PostCard from "@/app/pages/PostsPage/PostCard.tsx";
import { usePostsCount, usePostsList } from "@/app/api/posts/queryHooks.ts";
import PostsPagePagination from "@/app/pages/PostsPage/PostsPagePagination.tsx";
import PageItems from "@/app/pages/PostsPage/PageItems.tsx";
import { isEmpty } from "lodash";

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
        pagesTotal={10 ?? postsCountData.pagesTotal}
        page={page}
        onPageChange={setPage}
      >
        <PageItems
          pagesTotal={10 ?? postsCountData.pagesTotal}
          page={page}
          onPageChange={setPage}
        />
      </PostsPagePagination>
    </>
  );
};

export default PostsPage;
