import {
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination.tsx";

const PageItems = ({
  pagesTotal,
  page,
  onPageChange,
  itemsBeforeEllipsis = 5,
}: {
  pagesTotal: number;
  page: number;
  onPageChange: (page: number) => void;
  itemsBeforeEllipsis?: number;
}) => {
  const hasManyPages = pagesTotal > itemsBeforeEllipsis + 1;

  const isInIntervalInclusive = ({
    x,
    a,
    b,
  }: {
    x: number;
    a: number;
    b: number;
  }) => {
    return a <= x && x <= b;
  };

  return [...Array(pagesTotal).keys()].map((_, index) => {
    const pageNumber = index + 1;
    const isCurrentPageSelected = page === pageNumber;
    const isFirstPage = pageNumber === 1;
    const isLastPage = pageNumber === pagesTotal;
    const hasValueInInterval = isInIntervalInclusive({
      x: pageNumber,
      a: page - Math.floor(itemsBeforeEllipsis / 2),
      b: page + Math.floor(itemsBeforeEllipsis / 2),
    });
    const hasValueNearInterval = isInIntervalInclusive({
      x: pageNumber,
      a: page - Math.floor(itemsBeforeEllipsis / 2) - 1,
      b: page + Math.floor(itemsBeforeEllipsis / 2) + 1,
    });

    if (!hasManyPages) {
      return (
        <PaginationItem key={index} onClick={() => onPageChange(pageNumber)}>
          <PaginationLink isActive={isCurrentPageSelected}>
            {pageNumber}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (isFirstPage || isLastPage || hasValueInInterval) {
      return (
        <PaginationItem key={index} onClick={() => onPageChange(pageNumber)}>
          <PaginationLink isActive={isCurrentPageSelected}>
            {pageNumber}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (hasValueNearInterval) {
      return (
        <PaginationItem key={index}>
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    return null;
  });
};

export default PageItems;
