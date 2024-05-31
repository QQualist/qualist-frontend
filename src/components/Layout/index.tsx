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
        <Navbar />
        <main className="flex-1 p-12 overflow-y-scroll">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
