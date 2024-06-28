import * as React from "react";
import { GoPlus } from "react-icons/go";

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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { LuCheck, LuX } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import { Option } from "@/types/Option";

interface IMultipleSelectorInput {
  options: Option[];
  placeholder: string;
  onSelect: (selectedOptions: Option[]) => void;
  maxSelections?: number;
  onMaxSelectionReached?: (maxLimit: number) => void;
  emptyText?: string;
  inputPlaceholder?: string;
}

const MultipleSelectorInput = ({
  options = [],
  placeholder,
  onSelect,
  maxSelections,
  onMaxSelectionReached,
  emptyText,
  inputPlaceholder,
}: IMultipleSelectorInput) => {
  const [selectedOptions, setSelectedOptions] = React.useState<Option[]>([]);
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [filteredOptions, setFilteredOptions] = React.useState<Option[]>([]);
  const { t } = useTranslation();

  const handleOptionSelect = (option: Option) => {
    if (isOptionSelected(option)) {
      // Removes the option from selectedOptions if it is already selected
      setSelectedOptions((prevSelectedOptions) =>
        prevSelectedOptions.filter((opt) => opt.value !== option.value)
      );
      // Removes the onSelect option
      onSelect(selectedOptions.filter((opt) => opt.value !== option.value));
    } else {
      // Adds the option to selectedOptions if it is not selected
      if (maxSelections && selectedOptions.length >= maxSelections) {
        // Checks if the maximum selection limit has been reached
        if (onMaxSelectionReached) {
          onMaxSelectionReached(maxSelections);
        }
        return;
      }
      // Adds the option to selectedOptions if it is not selected
      setSelectedOptions((prevSelectedOptions) => [
        ...prevSelectedOptions,
        option,
      ]);
      onSelect([...selectedOptions, option]);
      setSearch(""); // Clears the search field after selection
    }
  };

  const isOptionSelected = (option: Option) =>
    selectedOptions.some((opt) => opt.value === option.value);

  React.useEffect(() => {
    const newFilteredOptions = options.filter((option) =>
      t(option.label).toLowerCase().includes(search.toLowerCase())
    );

    setFilteredOptions(newFilteredOptions);
  }, [search, options, t]);

  return (
    <div className="flex w-full flex-col items-start justify-between rounded-md border px-4 py-2 sm:flex-row sm:items-center cursor-pointer">
      <div className="flex flex-wrap gap-1">
        {selectedOptions.length > 0 &&
          selectedOptions.map((option) => (
            <Badge className="text-white flex gap-1" key={option.value}>
              {t(option.label)}
              <button
                type="button"
                onClick={() => handleOptionSelect(option)}
              >
                <LuX size={16} />
              </button>
            </Badge>
          ))}
        {selectedOptions.length === 0 && (
          <span className="text-muted-foreground text-sm">{t(placeholder)}</span>
        )}
      </div>

      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            <GoPlus size={24} />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <Command loop>
            <CommandInput
              placeholder={t(
                inputPlaceholder ? inputPlaceholder : "Find item..."
              )}
              autoFocus={true}
              className="h-9"
              value={search}
              onValueChange={(e: string) => setSearch(e)}
            />
            <CommandList>
              <CommandEmpty>
                {t(emptyText ? emptyText : "No item found")}
              </CommandEmpty>

              <CommandGroup>
                {filteredOptions.map((option) => (
                  <CommandItem
                    key={option.value}
                    onSelect={() => handleOptionSelect(option)}
                    value={option.label}
                    className="group w-full cursor-pointer flex gap-2"
                    disabled={option.disable}
                  >
                    {t(option.label)}
                    {option.badge && (
                      <Badge variant="secondary">{option.badge}</Badge>
                    )}
                    <LuCheck
                      className={`ms-auto h-4 w-4 ${
                        isOptionSelected(option) ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MultipleSelectorInput;
