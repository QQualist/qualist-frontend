import { ReactNode } from "react";
import { MultipleSelector } from '@/components/Inputs/MultipleSelector'

interface IMultipleSelectorRoot {
  children: ReactNode;
  error: string | undefined;
}

const MultipleSelectorRoot = ({ children, error }: IMultipleSelectorRoot) => {
  return (
    <div className="w-full h-max flex flex-col gap-1">
    {children}
    {error && <MultipleSelector.Error>{error}</MultipleSelector.Error>}
    </div>
  );
};

export default MultipleSelectorRoot;
