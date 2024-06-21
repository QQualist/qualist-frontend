import { ReactNode } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar Homenavbar={false} />
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
