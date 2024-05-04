import { usePageTitle } from "../../utils/usePageTitle/usePageTitle.ts";
import { useCategoriesList } from "../../api/category/queryHooks.ts";

const CategoriesPage = () => {
  usePageTitle("Categories page");

  const { data, isLoading } = useCategoriesList();

  if (isLoading) {
    return null;
  }

  return (
    <div>
      {data?.map(({ id, name }) => {
        return <div key={id}>{name}</div>;
      })}
    </div>
  );
};

export default CategoriesPage;
