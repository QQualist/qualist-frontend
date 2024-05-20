import { Button } from "../ui/button";

interface IHeader {
  title: string;
  subtitle: string;
  hasButton: boolean;
  textButton?: string;
  onClick?: () => void;
}

const Header = ({
  title,
  subtitle,
  hasButton,
  textButton,
  onClick,
}: IHeader) => {
  return (
    <div className="w-full flex items-center justify-between mb-8">
      <div className="w-full ">
        <h1 className="text-3xl font-bold">{title}</h1>
        <span className="text-lg text-dark-gray dark:text-light-gray">{subtitle}</span>
      </div>
      <div>
        {hasButton && (
          <Button variant="default" onClick={onClick}>
            {textButton}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
