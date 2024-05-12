import { usePageTitle } from "../../utils/usePageTitle.ts";
import { useState } from "react";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import {
  NEW_POST_CONTENT_PLACEHOLDER,
  NEW_POST_TITLE_PLACEHOLDER,
} from "@/app/pages/NewPostPage/constants.ts";
import NewPostCategorySelect from "@/app/pages/NewPostPage/NewPostCategorySelect.tsx";
import { useCategoriesList } from "@/app/api/category/queryHooks.ts";
import { useTagsList } from "@/app/api/tags/queryHooks.ts";
import { Button } from "@/components/ui/button.tsx";

const NewPostPage = () => {
  usePageTitle("Posts page");

  const { data: categoriesListData, isLoading: isCategoriesListLoading } =
    useCategoriesList();
  const { data: tagsListData, isLoading: isTagsListLoading } = useTagsList();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState<number>();
  const [tagIds, setTagIds] = useState<number[]>([]);

  const handleCategoryIdChange = (newCategoryId: string) => {
    setCategoryId(Number(newCategoryId));
  };

  const handleTagIdsChange = (newTagId: string) => {
    const newTagIdsList = [...tagIds, Number(newTagId)];

    setTagIds(newTagIdsList);
  };

  if (isCategoriesListLoading || isTagsListLoading) {
    return null;
  }

  return (
    <>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={NEW_POST_TITLE_PLACEHOLDER}
      />

      <NewPostCategorySelect
        data={categoriesListData ?? []}
        value={categoryId?.toString()}
        onValueChange={handleCategoryIdChange}
      />

      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={NEW_POST_CONTENT_PLACEHOLDER}
      />

      <Button>Submit</Button>
    </>
  );
};

export default NewPostPage;
