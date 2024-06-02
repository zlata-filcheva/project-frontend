import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb.tsx";
import { Link } from "react-router-dom";
import { PATH_NAMES } from "@/app/modules/router/routes.ts";
import { capitalizeFirstLetter } from "@/app/utils/text.ts";
import { usePageTitle } from "@/app/utils/usePageTitle.ts";

const PageBreadcrumbs = () => {
  const { title } = usePageTitle();

  return (
    <Breadcrumb className={"mb-5"}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to={PATH_NAMES.homePage}>Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbPage>{capitalizeFirstLetter(title)}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default PageBreadcrumbs;
