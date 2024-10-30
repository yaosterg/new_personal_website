import {
  Calendar,
  Home,
  Search,
  Settings,
  JapaneseYen,
  FileCode2,
  Gauge,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Calendar",
    url: "/user/calendar",
    icon: Calendar,
  },
  {
    title: "Dashboard",
    url: "/user/dashboard",
    icon: Gauge,
  },
  {
    title: "Document Generator",
    url: "/user/docgenerator",
    icon: FileCode2,
  },
  {
    title: "Stocks",
    url: "/user/stocks",
    icon: JapaneseYen,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>Logout</SidebarFooter>
    </Sidebar>
  );
}
