import { Provider, Trigger, Inset } from "@components/ui/sidebar";
import { SidebarContainer } from "./_components/sidebar/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <SidebarContainer />

      <Inset>
        <div className="flex w-full flex-col">
          <Trigger className="mt-4 ml-4 cursor-pointer" />

          {children}
        </div>
      </Inset>
    </Provider>
  );
}
