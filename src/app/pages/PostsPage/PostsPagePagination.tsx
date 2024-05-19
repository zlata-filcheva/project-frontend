import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination.tsx";
import { ReactElement } from "react";

const PostsPagePagination = ({
  pagesTotal,
  page,
  onPageChange,
  children,
}: {
  pagesTotal: number;
  page: number;
  onPageChange: (page: number) => void;
  children: ReactElement;
}) => {
  const handlePreviousPage = () => {
    if (page - 1 < 1) {
      return;
    }

    onPageChange(page - 1);
  };

  const handleNextPage = () => {
    if (page + 1 > pagesTotal) {
      return;
    }

    onPageChange(page + 1);
  };

  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem onClick={handlePreviousPage}>
            <PaginationPrevious />
          </PaginationItem>

          {children}

          <PaginationItem onClick={handleNextPage}>
            <PaginationNext />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default PostsPagePagination;
