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
import NewPostTagsDataList from "@/app/pages/NewPostPage/NewPostTagsDataList.tsx";

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

  const handleTagIdsChange = (newTag: string) => {
    const newTagId = tagsListData?.find(({ name }) => name === newTag)?.id;

    const hasTag = tagIds.some((tagId) => newTagId === tagId);

    const newTagIdsList = hasTag
      ? tagIds.filter((tagId) => tagId !== newTagId)
      : [...tagIds, newTagId];

    if (newTagIdsList.length > 5) {
      return;
    }

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

      {categoriesListData?.length && (
        <NewPostCategorySelect
          data={categoriesListData}
          value={categoryId?.toString()}
          onValueChange={handleCategoryIdChange}
        />
      )}

      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={NEW_POST_CONTENT_PLACEHOLDER}
      />

      {tagsListData?.length && (
        <NewPostTagsDataList
          data={tagsListData}
          selectedList={tagIds ?? []}
          onSelectedListChange={handleTagIdsChange}
        />
      )}

      <Button>Submit</Button>
    </>
  );
};

export default NewPostPage;
