import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@components/ui/sidebar";

import { SidebarContainer } from "./_components/sidebar/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <SidebarContainer />

      <SidebarInset>
        <div className="flex w-full flex-col">
          <SidebarTrigger className="mt-4 ml-4 cursor-pointer" />

          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
