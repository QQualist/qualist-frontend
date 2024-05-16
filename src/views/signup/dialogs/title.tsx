interface ITitle {
  children: string;
}

export const Title = ({ children }: ITitle) => {
  return <h2 className="font-semibold text-base">{children}</h2>;
};
