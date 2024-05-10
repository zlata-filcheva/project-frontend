import {
  Drawer as UiDrawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button.tsx";
import { Dispatch, ReactElement, SetStateAction } from "react";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";

const Drawer = ({
  triggerIcon,
  triggerText,
  title,
  description,
  inputText,
  setInputText,
  inputPlaceholder,
  textareaText,
  setTextareaText,
  textareaPlaceholder,
}: {
  triggerIcon: ReactElement;
  triggerText: string;
  title: string;
  description: string;
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
  inputPlaceholder: string;
  textareaText: string;
  setTextareaText: Dispatch<SetStateAction<string>>;
  textareaPlaceholder: string;
}) => (
  <UiDrawer>
    <DrawerTrigger asChild>
      <Button variant="outline" className={"absolute bottom-5 right-5"}>
        {triggerIcon} {triggerText}
      </Button>
    </DrawerTrigger>

    <DrawerContent>
      <div className="mx-auto w-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>

        <div className="p-4 pb-0">
          <div className="flex items-center justify-center space-x-2">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={inputPlaceholder}
            />

            <Textarea
              value={textareaText}
              onChange={(e) => setTextareaText(e.target.value)}
              placeholder={textareaPlaceholder}
            />
          </div>
        </div>

        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  </UiDrawer>
);

export default Drawer;
