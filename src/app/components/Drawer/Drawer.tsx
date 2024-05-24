import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button.tsx";
import { ReactElement } from "react";

const Drawer = ({
  triggerIcon,
  triggerText,
  title,
  description,
  content,
  onSubmit,
}: {
  triggerIcon: ReactElement;
  triggerText: string;
  title: string;
  description: string;
  content: ReactElement;
  onSubmit: () => void;
}) => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" className={"absolute bottom-5 right-5"}>
        {triggerIcon} {triggerText}
      </Button>
    </SheetTrigger>

    <SheetContent side={"right"}>
      <SheetHeader>
        <SheetTitle>{title}</SheetTitle>
        <SheetDescription>{description}</SheetDescription>
      </SheetHeader>

      <div className="space-y-2 py-4">{content}</div>

      <SheetFooter className={"grid grid-cols-2"}>
        <SheetClose asChild>
          <Button variant="outline">Cancel</Button>
        </SheetClose>

        <Button onClick={onSubmit}>Submit</Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export default Drawer;
