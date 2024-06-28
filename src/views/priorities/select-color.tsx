import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { colors } from "./colors";

interface ISelectColor {
  defaultValue?: string;
  onSelect: (color: string) => void;
}

const SelectColor = ({ defaultValue, onSelect }: ISelectColor) => {
  return (
    <Select
      defaultValue={defaultValue ? defaultValue : `${colors[0].value}`}
      onValueChange={(color) => onSelect(color)}
    >
      <div className="w-20 h-max">
        <SelectTrigger className="w-full h-10">
          <SelectValue id="color" />
        </SelectTrigger>
      </div>
      <SelectContent>
        <SelectGroup>
          {colors.map((color) => (
            <SelectItem
              value={color.value}
              defaultChecked={color.value === colors[0].value}
              className="cursor-pointer"
            >
              <div
                className={`w-4 h-4 rounded-full`}
                style={{ backgroundColor: color.value }}
              />
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectColor;
