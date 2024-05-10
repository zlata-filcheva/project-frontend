import { Button } from "@/components/ui/button.tsx";
import { CirclePlus } from "lucide-react";

const AddButton = ({ text }: { text: string }) => {
  return (
    <Button variant="outline" className={"absolute bottom-5 right-5"}>
      <CirclePlus className="mr-2 h-4 w-4" />

      {text}
    </Button>
  );
};

export default AddButton;
