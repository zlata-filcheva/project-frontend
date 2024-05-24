import { usePageTitle } from "../../utils/usePageTitle.ts";
import {
  useCategoriesList,
  useCategoryCreate,
} from "../../api/category/queryHooks.ts";
import DataTable from "@/app/components/DataTable/DataTable.tsx";
import { CategoriesTableColumns } from "@/app/pages/CategoriesPage/columns.ts";
import { CirclePlus } from "lucide-react";
import {
  CATEGORIES_DRAWER_DESCRIPTION,
  CATEGORIES_DRAWER_INPUT_PLACEHOLDER,
  CATEGORIES_DRAWER_TEXTAREA_PLACEHOLDER,
  CATEGORIES_DRAWER_TITLE,
  CATEGORIES_DRAWER_TRIGGER_TEXT,
} from "@/app/pages/CategoriesPage/constants.ts";
import { useState } from "react";
import Drawer from "@/app/components/Drawer/Drawer.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";

const CategoriesPage = () => {
  usePageTitle("Categories page");

  const { data, isLoading } = useCategoriesList();
  const { mutateCategoryCreate } = useCategoryCreate();

  const [newCategoryTitle, setNewCategoryTitle] = useState("");
  const [newCategoryDescription, setNewCategoryDescription] = useState("");

  const handleCategoryCreate = () => {
    const newData = {
      category: newCategoryTitle,
      description: newCategoryDescription,
    };

    mutateCategoryCreate({
      data: newData,
      onSettled: () => {
        setNewCategoryTitle("");
        setNewCategoryDescription("");
      },
    });
  };

  if (isLoading) {
    return null;
  }

  return (
    <>
      <DataTable columns={CategoriesTableColumns} data={data ?? []} />

      <Drawer
        triggerIcon={<CirclePlus className="mr-2 h-4 w-4" />}
        triggerText={CATEGORIES_DRAWER_TRIGGER_TEXT}
        title={CATEGORIES_DRAWER_TITLE}
        description={CATEGORIES_DRAWER_DESCRIPTION}
        content={
          <>
            <Input
              value={newCategoryTitle}
              onChange={(e) => setNewCategoryTitle(e.target.value)}
              placeholder={CATEGORIES_DRAWER_INPUT_PLACEHOLDER}
            />

            <Textarea
              value={newCategoryDescription}
              onChange={(e) => setNewCategoryDescription(e.target.value)}
              placeholder={CATEGORIES_DRAWER_TEXTAREA_PLACEHOLDER}
            />
          </>
        }
        onSubmit={handleCategoryCreate}
      />
    </>
  );
};

export default CategoriesPage;
