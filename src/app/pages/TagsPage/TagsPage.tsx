import { usePageTitle } from "../../utils/usePageTitle.ts";
import { CirclePlus } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input.tsx";
import Drawer from "@/app/components/Drawer/Drawer.tsx";
import DataTable from "@/app/components/DataTable/DataTable.tsx";
import { TagsTableColumns } from "@/app/pages/TagsPage/columns.ts";
import {
  TAGS_DRAWER_DESCRIPTION,
  TAGS_DRAWER_FIFTH_PLACEHOLDER,
  TAGS_DRAWER_FIRST_PLACEHOLDER,
  TAGS_DRAWER_FOURTH_PLACEHOLDER,
  TAGS_DRAWER_SECOND_PLACEHOLDER,
  TAGS_DRAWER_THIRD_PLACEHOLDER,
  TAGS_DRAWER_TITLE,
  TAGS_DRAWER_TRIGGER_TEXT,
} from "@/app/pages/TagsPage/constants.ts";
import { useTagsCreate, useTagsList } from "@/app/api/tags/queryHooks.ts";

const TagsPage = () => {
  usePageTitle("Tags page");

  const { data, isLoading } = useTagsList();
  const { mutateTagsCreate } = useTagsCreate();

  const [firstTag, setFirstTag] = useState("");
  const [secondTag, setSecondTag] = useState("");
  const [thirdTag, setThirdSecondTag] = useState("");
  const [fourthTag, setFourthTag] = useState("");
  const [fifthTag, setFifthTag] = useState("");

  const handleUserDataCreate = () => {
    const newData: { tags: string[] } = { tags: [] };

    if (firstTag.length) {
      newData.tags.push(firstTag);
    }

    if (secondTag.length) {
      newData.tags.push(secondTag);
    }

    if (thirdTag.length) {
      newData.tags.push(thirdTag);
    }

    if (fourthTag.length) {
      newData.tags.push(fourthTag);
    }

    if (fifthTag.length) {
      newData.tags.push(fifthTag);
    }

    mutateTagsCreate({
      data: newData,
      onSettled: () => {
        setFirstTag("");
        setSecondTag("");
        setThirdSecondTag("");
        setFourthTag("");
        setFifthTag("");
      },
    });
  };

  if (isLoading) {
    return null;
  }

  return (
    <>
      <DataTable columns={TagsTableColumns} data={data ?? []} />

      <Drawer
        triggerIcon={<CirclePlus className="mr-2 h-4 w-4" />}
        triggerText={TAGS_DRAWER_TRIGGER_TEXT}
        title={TAGS_DRAWER_TITLE}
        description={TAGS_DRAWER_DESCRIPTION}
        content={
          <>
            <Input
              value={firstTag}
              onChange={(e) => setFirstTag(e.target.value)}
              placeholder={TAGS_DRAWER_FIRST_PLACEHOLDER}
            />

            <Input
              value={secondTag}
              onChange={(e) => setSecondTag(e.target.value)}
              placeholder={TAGS_DRAWER_SECOND_PLACEHOLDER}
            />

            <Input
              value={thirdTag}
              onChange={(e) => setThirdSecondTag(e.target.value)}
              placeholder={TAGS_DRAWER_THIRD_PLACEHOLDER}
            />

            <Input
              value={fourthTag}
              onChange={(e) => setFourthTag(e.target.value)}
              placeholder={TAGS_DRAWER_FOURTH_PLACEHOLDER}
            />

            <Input
              value={fifthTag}
              onChange={(e) => setFifthTag(e.target.value)}
              placeholder={TAGS_DRAWER_FIFTH_PLACEHOLDER}
            />
          </>
        }
        onSubmit={handleUserDataCreate}
      />
    </>
  );
};

export default TagsPage;
