interface IParagraph {
    children: string;
  }

export const Paragraph = ({ children }: IParagraph) => {
  return <p className="text-justify text-sm">{children}</p>;
};
