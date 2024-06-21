import { ReactNode } from "react";
import {Checkbox} from './index'

interface ICheckboxRoot {
  children: ReactNode;
  error: string | undefined;
}

const CheckboxRoot = ({ children, error }: ICheckboxRoot) => {
  return (
    <div className="items-top flex space-x-2">
        {children}
        {error && <Checkbox.Error>{error}</Checkbox.Error>}
    </div>
  );
};

export default CheckboxRoot;
