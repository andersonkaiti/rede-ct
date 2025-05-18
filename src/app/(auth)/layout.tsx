import { Provider, Trigger } from "@components/ui/sidebar";
import { SidebarContainer } from "./_components/sidebar/sidebar";

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
