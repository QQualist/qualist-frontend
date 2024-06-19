import { Checkbox } from "@/components/ui/checkbox";
import { UseFormRegisterReturn } from "react-hook-form";

interface ICheckboxInput {
  id: string;
  register?: UseFormRegisterReturn;
}

const CheckboxInput = ({ id, register }: ICheckboxInput) => {
  return (
    <Checkbox 
        id={id}
        {...register}
    />
  );    
};

export default CheckboxInput;
