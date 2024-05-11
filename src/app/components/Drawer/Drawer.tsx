import {
  Drawer as UiDrawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer.tsx";
import { Button } from "@/components/ui/button.tsx";
import { ReactElement } from "react";

const Drawer = ({
  triggerIcon,
  triggerText,
  title,
  description,
  drawerContent,
  onSubmit,
}: {
  triggerIcon: ReactElement;
  triggerText: string;
  title: string;
  description: string;
  drawerContent: ReactElement;
  onSubmit: () => void;
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

        <div className="p-4 pb-0 grid space-y-2">{drawerContent}</div>

        <DrawerFooter>
          <Button onClick={onSubmit}>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  </UiDrawer>
);

export default Drawer;
