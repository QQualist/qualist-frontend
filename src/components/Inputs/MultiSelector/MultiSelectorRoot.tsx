import { ReactNode } from "react";
import { MultiSelector } from ".";

interface IMultiSelectorRoot {
  children: ReactNode;
  error: string | undefined;
}

const MultiSelectorRoot = ({ children, error }: IMultiSelectorRoot) => {
  return (
    <div className="w-full h-max flex flex-col gap-1">
    {children}
    {error && <MultiSelector.Error>{error}</MultiSelector.Error>}
    </div>
  );
};

export default MultiSelectorRoot;
