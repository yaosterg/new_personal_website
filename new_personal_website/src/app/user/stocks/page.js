import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import StocksContent from "./stocks_content";

export default function Stocks({ children }) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          <StocksContent />
        </main>
      </SidebarProvider>
    </>
  );
}
