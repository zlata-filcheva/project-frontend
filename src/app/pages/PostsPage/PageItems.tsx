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
  itemsBeforeEllipsis: number;
}) => {
  const hasManyPages = pagesTotal > itemsBeforeEllipsis;
  const itemsNumber = hasManyPages ? itemsBeforeEllipsis + 2 : pagesTotal;

  return Array.from(new Array(itemsNumber)).map((_, index) => {
    const isPreLastItem = itemsNumber - 1 === index + 1;
    const isLastItem = itemsNumber === index + 1;

    if (hasManyPages && isPreLastItem) {
      return (
        <PaginationItem key={index}>
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    if (hasManyPages && isLastItem) {
      return (
        <PaginationItem key={index} onClick={() => onPageChange(index + 1)}>
          <PaginationLink>{index + 1}</PaginationLink>
        </PaginationItem>
      );
    }

    return (
      <PaginationItem key={index} onClick={() => onPageChange(index + 1)}>
        <PaginationLink isActive={page === index + 1}>
          {index + 1}
        </PaginationLink>
      </PaginationItem>
    );
  });
};

export default PageItems;
