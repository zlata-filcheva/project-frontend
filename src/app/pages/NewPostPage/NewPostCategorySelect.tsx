import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { NEW_POST_CATEGORY_SELECT_VALUE_PLACEHOLDER } from "@/app/pages/NewPostPage/constants.ts";
import { capitalizeFirstLetter } from "@/app/utils/text.ts";

const NewPostCategorySelect = ({
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
        <SelectValue placeholder={NEW_POST_CATEGORY_SELECT_VALUE_PLACEHOLDER} />
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

export default NewPostCategorySelect;
