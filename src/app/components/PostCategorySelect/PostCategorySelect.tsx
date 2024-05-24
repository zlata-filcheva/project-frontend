import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { EDIT_POST_CATEGORY_SELECT_VALUE_PLACEHOLDER } from "@/app/components/PostForm/constants.ts";
import { capitalizeFirstLetter } from "@/app/utils/text.ts";

const PostCategorySelect = ({
  data,
  value,
  onValueChange,
}: {
  data: { id: number; name: string }[];
  value?: string;
  onValueChange: (newValue: string) => void;
}) => {
  return (
    <Select
      {...(value?.length && { value })}
      onValueChange={(newValue) => onValueChange(newValue)}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue
          placeholder={EDIT_POST_CATEGORY_SELECT_VALUE_PLACEHOLDER}
        />
      </SelectTrigger>

      <SelectContent>
        {data.map(({ id, name }) => (
          <SelectItem key={id} value={id.toString()}>
            {capitalizeFirstLetter(name)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default PostCategorySelect;
