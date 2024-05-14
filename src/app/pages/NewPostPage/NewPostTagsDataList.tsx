"use client";

import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { NEW_POST_TAGS_COMBOBOX_TRIGGER_TEXT } from "@/app/pages/NewPostPage/constants.ts";

const NewPostTagsDataList = ({
  data,
  selectedList,
  onSelectedListChange,
}: {
  data: { id: number; name: string }[];
  selectedList: number[];
  onSelectedListChange: (newValue: string) => void;
}) => {
  const [open, setOpen] = useState(false);

  const triggerText = (() => {
    if (!selectedList?.length) {
      return NEW_POST_TAGS_COMBOBOX_TRIGGER_TEXT;
    }

    const tagsText = selectedList.length > 1 ? "tags" : "tag";

    return `${selectedList.length}  ${tagsText} (${5 - selectedList.length} left)`;
  })();

  const handleTagSelect = (newValue: string) => {
    onSelectedListChange(newValue);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {triggerText}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Type a command or search..." />

          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup>
              {data?.map(({ id, name }) => (
                <CommandItem key={id} value={name} onSelect={handleTagSelect}>
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedList.includes(id) ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default NewPostTagsDataList;
