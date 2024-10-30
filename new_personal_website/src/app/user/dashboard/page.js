import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import DashboardContent from "./dashboard_content";

export default function DashboardLayout({ children }) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          <DashboardContent />
        </main>
      </SidebarProvider>
    </>
  );
}
