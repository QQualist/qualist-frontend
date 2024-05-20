import { ReactNode, createContext, useEffect, useState } from "react";
import { ContextSidebar } from "@/types/ContextSidebar";

interface ISidebarProvider {
  children: ReactNode;
}

export const SidebarContext = createContext<ContextSidebar | null>(null);

export const SidebarProvider = ({ children }: ISidebarProvider) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleIsOpen = () => {
    setIsOpen((state) => {
      const newState = !state;
      localStorage.setItem("@Ui:sidebar", JSON.stringify(newState));
      return newState;
    });
  };

  useEffect(() => {
    const loadStoreSidebar = () => {
      const sidebarStatus = localStorage.getItem("@Ui:sidebar");
      if (sidebarStatus) {
        setIsOpen(JSON.parse(sidebarStatus));
      } else {
        localStorage.setItem("@Ui:sidebar", JSON.stringify(true));
      }
    };
    loadStoreSidebar();
  }, []);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};
