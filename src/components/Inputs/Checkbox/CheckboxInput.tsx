import { Checkbox } from "@/components/ui/checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { UseFormRegisterReturn } from "react-hook-form";

interface ICheckboxInput extends CheckboxProps {
  id: string;
  checked: boolean | undefined;
  onCheckedChange: (e: boolean) => void;
  register?: UseFormRegisterReturn;
}

const CheckboxInput = ({ id, register, checked, onCheckedChange }: ICheckboxInput) => {
  return (
    <Checkbox 
        id={id}
        checked={checked}
        onCheckedChange={(e) => onCheckedChange(e as boolean)}
        {...register}
    />
  );    
};

export default CheckboxInput;
