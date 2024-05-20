import { ReactNode } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Header from "./header";
interface ILayout {
  children: ReactNode;
  title: string;
  subtitle: string;
  hasButton: boolean;
  textButton?: string;
  onClick?: () => void;
}

const Layout = ({ title, subtitle, hasButton, textButton, onClick, children }: ILayout) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 px-12 pt-5">
          <Header
            title={title}
            subtitle={subtitle}
            hasButton={hasButton}
            onClick={onClick}
            textButton={textButton}
          />
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
