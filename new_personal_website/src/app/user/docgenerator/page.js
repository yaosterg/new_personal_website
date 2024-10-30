import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import DocGeneratorContent from "./docgenerator_content";

export default function DocGenerator({ children }) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          <DocGeneratorContent />
        </main>
      </SidebarProvider>
    </>
  );
}
