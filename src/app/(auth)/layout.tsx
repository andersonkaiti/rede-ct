import { SidebarContainer } from "@components/restrict-area-sidebar/sidebar";
import { Provider, Trigger } from "@components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <SidebarContainer />

      <Trigger className="mt-4 ml-4 cursor-pointer" />
      {children}
    </Provider>
  );
}
