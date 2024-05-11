import { usePageTitle } from "../../utils/usePageTitle/usePageTitle.ts";
import {
  useCategoriesList,
  useCategoryCreate,
} from "../../api/category/queryHooks.ts";
import DataTable from "@/app/pages/CategoriesPage/DataTable.tsx";
import { columns } from "@/app/pages/CategoriesPage/columns.ts";
import Drawer from "@/app/components/Drawer/Drawer.tsx";
import { CirclePlus } from "lucide-react";
import {
  CATEGORIES_DRAWER_DESCRIPTION,
  CATEGORIES_DRAWER_INPUT_PLACEHOLDER,
  CATEGORIES_DRAWER_TEXTAREA_PLACEHOLDER,
  CATEGORIES_DRAWER_TITLE,
  CATEGORIES_DRAWER_TRIGGER_TEXT,
} from "@/app/pages/CategoriesPage/constants.ts";
import { useState } from "react";

const CategoriesPage = () => {
  usePageTitle("Categories page");

  const { data, isLoading } = useCategoriesList();
  const { mutateCategoryCreate } = useCategoryCreate();

  const [newCategoryTitle, setNewCategoryTitle] = useState("Texan");
  const [newCategoryDescription, setNewCategoryDescription] =
    useState("I like Texan food");

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
      <DataTable columns={columns} data={data ?? []} />

      <Drawer
        triggerIcon={<CirclePlus className="mr-2 h-4 w-4" />}
        triggerText={CATEGORIES_DRAWER_TRIGGER_TEXT}
        title={CATEGORIES_DRAWER_TITLE}
        description={CATEGORIES_DRAWER_DESCRIPTION}
        inputText={newCategoryTitle}
        setInputText={setNewCategoryTitle}
        inputPlaceholder={CATEGORIES_DRAWER_INPUT_PLACEHOLDER}
        textareaText={newCategoryDescription}
        setTextareaText={setNewCategoryDescription}
        textareaPlaceholder={CATEGORIES_DRAWER_TEXTAREA_PLACEHOLDER}
        onSubmit={handleCategoryCreate}
      />
    </>
  );
};

export default CategoriesPage;
