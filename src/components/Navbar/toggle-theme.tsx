import { useTheme } from "@/hooks/useTheme";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = (): void => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button type="button" onClick={toggleTheme}>
      {theme === "dark" ? (
        <MdLightMode className="text-white" size={24} />
      ) : (
        <MdDarkMode className="text-white" size={24} />
      )}
    </button>
  );
};

export default ToggleTheme;
