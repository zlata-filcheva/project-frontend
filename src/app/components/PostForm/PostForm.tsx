import { useState } from "react";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import {
  EDIT_POST_CONTENT_PLACEHOLDER,
  EDIT_POST_CREATE_CONFIRM_TEXT,
  EDIT_POST_PUBLISH_SUBMIT_BUTTON_TEXT,
  EDIT_POST_TITLE_PLACEHOLDER,
  EDIT_POST_UPDATE_CONFIRM_TEXT,
  EDIT_POST_UPDATE_SUBMIT_BUTTON_TEXT,
} from "@/app/components/PostForm/constants.ts";
import PostCategorySelect from "@/app/components/PostCategorySelect/PostCategorySelect.tsx";
import { useCategoriesList } from "@/app/api/category/queryHooks.ts";
import { useTagsList } from "@/app/api/tags/queryHooks.ts";
import { Button } from "@/components/ui/button.tsx";
import PostTagsDataList from "@/app/components/PostTagsDataList/PostTagsDataList.tsx";
import { usePostCreate, usePostUpdate } from "@/app/api/posts/queryHooks.ts";
import { useAuth0 } from "@auth0/auth0-react";
import { PATH_NAMES } from "@/app/modules/router/routes.ts";
import { useNavigate } from "react-router-dom";
import { EditPostProps } from "@/app/types/post.ts";
import { useUserDataUpdate } from "@/app/api/user/queryHooks.ts";

const PostForm = ({ editPostData }: { editPostData?: EditPostProps }) => {
  const navigate = useNavigate();
  const { user } = useAuth0();

  const { data: categoriesListData, isLoading: isCategoriesListLoading } =
    useCategoriesList();
  const { data: tagsListData, isLoading: isTagsListLoading } = useTagsList();
  const { mutatePostCreate } = usePostCreate();
  const { mutatePostUpdate } = usePostUpdate();
  const { mutateUserDataUpdate } = useUserDataUpdate();

  const [title, setTitle] = useState<string>(editPostData?.title ?? "");
  const [content, setContent] = useState<string>(editPostData?.content ?? "");
  const [categoryId, setCategoryId] = useState<number | undefined>(
    Number(editPostData?.categoryId) || undefined,
  );
  const [tagIds, setTagIds] = useState<number[]>(editPostData?.tagIds ?? []);

  const isSubmitButtonActive = (() => {
    if (!tagsListData?.length || !categoriesListData?.length) {
      return false;
    }

    if (!editPostData?.id) {
      return (
        !!title.length && !!content.length && !!categoryId && !!tagIds.length
      );
    }

    return (
      title !== editPostData.title ||
      content !== editPostData.content ||
      categoryId !== Number(editPostData.categoryId) ||
      tagIds.length !== editPostData.tagIds.length
    );
  })();

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
    const confirmText = !editPostData?.id
      ? EDIT_POST_CREATE_CONFIRM_TEXT
      : EDIT_POST_UPDATE_CONFIRM_TEXT;

    if (!window.confirm(confirmText)) {
      return;
    }

    if (!categoryId) {
      return;
    }

    const postData = {
      title,
      content,
      categoryId,
      tagIds,
      userId: user?.sub ?? "",
    };

    mutateUserDataUpdate({
      onSettled: () => {},
    });

    if (!editPostData?.id) {
      mutatePostCreate({
        data: postData,
        onSuccess: () => {
          navigate(PATH_NAMES.postsPage);
        },
      });

      return;
    }

    mutatePostUpdate({
      data: { ...postData, id: Number(editPostData?.id) },
      onSuccess: () => {
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
          placeholder={EDIT_POST_TITLE_PLACEHOLDER}
        />
      </div>

      {!!categoriesListData?.length && (
        <div>
          <PostCategorySelect
            data={categoriesListData}
            value={categoryId?.toString()}
            onValueChange={handleCategoryIdChange}
          />
        </div>
      )}

      {!!tagsListData?.length && (
        <div className={"text-right"}>
          <PostTagsDataList
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
          placeholder={EDIT_POST_CONTENT_PLACEHOLDER}
        />
      </div>

      <Button
        className={"col-span-2"}
        onClick={handlePostPublish}
        disabled={!isSubmitButtonActive}
      >
        {!editPostData?.id
          ? EDIT_POST_PUBLISH_SUBMIT_BUTTON_TEXT
          : EDIT_POST_UPDATE_SUBMIT_BUTTON_TEXT}
      </Button>
    </div>
  );
};

export default PostForm;
