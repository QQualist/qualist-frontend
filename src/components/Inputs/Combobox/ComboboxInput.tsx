import React, { useState } from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useTranslation } from "react-i18next";

interface Option {
  value: string;
  label: React.ReactNode;
}

interface Props {
  data: Option[];
  placeholder: string;
  onSelect: (selectedValue: string) => void;
}

export const ComboboxInput = ({ data = [], placeholder, onSelect }: Props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const { t } = useTranslation();

  const handleSelect = (selectedValue: string) => {
    setValue(selectedValue);
    setOpen(false);
    onSelect(selectedValue);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? data.find((item) => item.value === value)?.label
            : `${t(placeholder)}...`}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-full p-0" align="start">
        <Command className="w-full">
          <CommandInput placeholder="Search..." className="h-9" />
          <CommandList>
            <CommandEmpty>No item found.</CommandEmpty>
            <CommandGroup>
              <CommandList>
                {data.map((item) => (
                  <CommandItem
                    key={item.value}
                    onSelect={() => handleSelect(item.value)}
                    disabled={item.value === value}
                  >
                    {item.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === item.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandList>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default ComboboxInput;
