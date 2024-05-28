import { ReactNode } from "react";
import { TextArea } from ".";

interface ITextAreaRoot {
    children: ReactNode;
    error: string | undefined
}

const TextAreaRoot = ({ children, error }: ITextAreaRoot) => {
  return (
    <div className="w-full h-max flex flex-col gap-1">
      {children}
      {error && <TextArea.Error>{error}</TextArea.Error>}
    </div>
  );
};

export default TextAreaRoot;
