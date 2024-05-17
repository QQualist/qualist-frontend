import Notifications from "./notifications";
import ToggleTheme from "./toggle-theme";
import User from "./user";

const Navbar = () => {
  return (
    <div className="flex w-screen h-20 items-center justify-end bg-dark-blue py-3 pr-9">
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-10">
          <Notifications />
          <ToggleTheme />
        </div>
        <User />
      </div>
    </div>
  );
};

export default Navbar;
