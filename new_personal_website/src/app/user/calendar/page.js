import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import CalendarContent from "./calendar_content";

export default function DocGenerator({ children }) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          <CalendarContent />
        </main>
      </SidebarProvider>
    </>
  );
}
