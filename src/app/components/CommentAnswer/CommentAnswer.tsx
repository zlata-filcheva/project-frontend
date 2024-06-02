import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { COMMENT_ANSWER_PLACEHOLDER } from "@/app/components/CommentAnswer/constants.ts";

const CommentAnswer = ({
  value,
  onChange,
  onSubmit,
  buttonText,
}: {
  value: string;
  onChange: (newValue: string) => void;
  onSubmit: () => void;
  buttonText: string;
}) => (
  <div className="flex w-full items-center space-x-2 my-2">
    <Input
      className={"mt-2"}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={COMMENT_ANSWER_PLACEHOLDER}
    />
    <Button onClick={onSubmit}>{buttonText}</Button>
  </div>
);

export default CommentAnswer;
