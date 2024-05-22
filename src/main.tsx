import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/global.css";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProvider } from "./contexts/user.tsx";
import { ThemeProvider } from "./contexts/theme.tsx";
import "@/i18n";
import { SidebarProvider } from "./contexts/sidebar.tsx";
import { TooltipProvider } from "./components/ui/tooltip.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <ThemeProvider defaultTheme="light" storageKey="@User:Theme">
        <SidebarProvider>
          <TooltipProvider>
            <QueryClientProvider client={queryClient}>
              <Toaster />
              <App />
            </QueryClientProvider>
          </TooltipProvider>
        </SidebarProvider>
      </ThemeProvider>
    </UserProvider>
  </React.StrictMode>
);
