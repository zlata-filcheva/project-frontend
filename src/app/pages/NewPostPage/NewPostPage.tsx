import { usePageTitle } from "../../utils/usePageTitle.ts";
import { useState } from "react";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import {
  NEW_POST_CONTENT_PLACEHOLDER,
  NEW_POST_SUBMIT_BUTTON_CONFIRM_TEXT,
  NEW_POST_SUBMIT_BUTTON_TEXT,
  NEW_POST_TITLE_PLACEHOLDER,
} from "@/app/pages/NewPostPage/constants.ts";
import NewPostCategorySelect from "@/app/pages/NewPostPage/NewPostCategorySelect.tsx";
import { useCategoriesList } from "@/app/api/category/queryHooks.ts";
import { useTagsList } from "@/app/api/tags/queryHooks.ts";
import { Button } from "@/components/ui/button.tsx";
import NewPostTagsDataList from "@/app/pages/NewPostPage/NewPostTagsDataList.tsx";
import { usePostCreate } from "@/app/api/posts/queryHooks.ts";
import { useAuth0 } from "@auth0/auth0-react";
import { PATH_NAMES } from "@/app/modules/router/routes.ts";
import { useNavigate } from "react-router-dom";

const NewPostPage = () => {
  usePageTitle("New post page");

  const navigate = useNavigate();
  const { user } = useAuth0();

  const { data: categoriesListData, isLoading: isCategoriesListLoading } =
    useCategoriesList();
  const { data: tagsListData, isLoading: isTagsListLoading } = useTagsList();
  const { mutatePostCreate } = usePostCreate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState<number>();
  const [tagIds, setTagIds] = useState<number[]>([]);

  const handleCategoryIdChange = (newCategoryId: string) => {
    setCategoryId(Number(newCategoryId));
  };

  const handleTagIdsChange = (newTag: string) => {
    const newTagId = tagsListData?.find(({ name }) => name === newTag)?.id;

    if (!newTagId) {
      return;
    }

    const hasTag = tagIds.some((tagId) => newTagId === tagId);

    const newTagIdsList = hasTag
      ? tagIds.filter((tagId) => tagId !== newTagId)
      : [...tagIds, newTagId];

    if (newTagIdsList.length > 5) {
      return;
    }

    setTagIds(newTagIdsList);
  };

  const handlePostPublish = () => {
    if (!window.confirm(NEW_POST_SUBMIT_BUTTON_CONFIRM_TEXT)) {
      return;
    }

    if (!categoryId) {
      return;
    }

    mutatePostCreate({
      data: {
        title,
        content,
        categoryId,
        userId: user?.sub ?? "",
        tagIds,
      },
      onSettled: () => {
        navigate(PATH_NAMES.postsPage);
      },
    });
  };

  if (isCategoriesListLoading || isTagsListLoading) {
    return null;
  }

  return (
    <div className={"grid grid-cols-2"}>
      <div className={"col-span-2 mb-2"}>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={NEW_POST_TITLE_PLACEHOLDER}
        />
      </div>

      {categoriesListData?.length && (
        <div>
          <NewPostCategorySelect
            data={categoriesListData}
            value={categoryId?.toString()}
            onValueChange={handleCategoryIdChange}
          />
        </div>
      )}

      {tagsListData?.length && (
        <div className={"text-right"}>
          <NewPostTagsDataList
            data={tagsListData}
            selectedList={tagIds ?? []}
            onSelectedListChange={handleTagIdsChange}
          />
        </div>
      )}

      <div className={"my-2 col-span-2"}>
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={NEW_POST_CONTENT_PLACEHOLDER}
        />
      </div>

      <Button className={"col-span-2"} onClick={handlePostPublish}>
        {NEW_POST_SUBMIT_BUTTON_TEXT}
      </Button>
    </div>
  );
};

export default NewPostPage;
