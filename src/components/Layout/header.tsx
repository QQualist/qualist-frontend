import { Button } from "../ui/button";

type HeaderProps = {
    title: string;
    subtitle: string;
    buttonText: string;
    hasButton: boolean;
    onClick: () => void;
};

const Header: React.FC<HeaderProps> = ({ title, subtitle, buttonText, hasButton, onClick }) => {
    return (

<       header className="flex justify-between items-center">
            <div className="text-container">
                <h1 className="text-3xl font-bold text-layout dark:text-white">{title}</h1>
                <h2 className="text-lg font-medium text-dark-gray dark:text-light-gray">{subtitle}</h2>
            </div>
            {hasButton && <Button className="h-10 min-w-40 text-sm dark:shadow-externo" variant="default" size="sm" onClick={onClick}>{buttonText}</Button>}
        </header>
    );
  };
  
  export default Header;