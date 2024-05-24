import { ReactElement } from "react";
import { isInIntervalInclusive } from "@/app/utils/math.ts";
import { RenderPageLinkType } from "@/app/types/page.ts";

const PageItems = ({
  pagesTotal,
  page,
  onPageChange,
  itemsBeforeEllipsis = 5,
  renderPageLink,
  renderPageEllipsis,
}: {
  pagesTotal: number;
  page: number;
  onPageChange: (page: number) => void;
  itemsBeforeEllipsis?: number;
  renderPageLink: ({
    isActive,
    onClick,
    pageNumber,
    key,
  }: RenderPageLinkType) => ReactElement;
  renderPageEllipsis: (key: number) => ReactElement;
}) => {
  const hasManyPages = pagesTotal > itemsBeforeEllipsis + 1;

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

    if (!hasManyPages || isFirstPage || isLastPage || hasValueInInterval) {
      const handlePageChange = () => onPageChange(pageNumber);

      return renderPageLink({
        onClick: handlePageChange,
        isActive: isCurrentPageSelected,
        pageNumber,
        key: index,
      });
    }

    if (hasValueNearInterval) {
      return renderPageEllipsis(index);
    }

    return null;
  });
};

export default PageItems;
