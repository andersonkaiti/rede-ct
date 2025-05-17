import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import * as Menubar from "@components/ui/menubar";
import * as Sidebar from "@components/ui/sidebar";
import { User, LogOut, ChevronsUpDown } from "lucide-react";
import { NavigationLink } from "types/navigation-link";
import { SidebarBackButton } from "./sidebar-back-button";
import { sidebarLinks } from "./sidebar-links";

export async function SidebarContainer() {
  const user = await currentUser();

  return (
    <>
      <Sidebar.Root
        className="sticky top-0 left-0"
        side="left"
        variant="sidebar"
        collapsible="offcanvas"
      >
        <Sidebar.Header className="py-4">
          <Menubar.Root className="flex w-full border-none bg-transparent shadow-none">
            <Menubar.Menu>
              <Menubar.Trigger className="flex w-full cursor-pointer items-center justify-between gap-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-indigo-500/20 p-2">
                    <User className="h-5 w-5 text-indigo-500" />
                  </div>
                  {user?.firstName} {user?.lastName}
                </div>
                <ChevronsUpDown className="ml-2 h-4 w-4" />
              </Menubar.Trigger>
              <Menubar.Content>
                <Menubar.Item>
                  <SignOutButton>
                    <div className="group flex w-full cursor-pointer items-center gap-2">
                      <LogOut className="h-5 w-5 text-indigo-500 group-hover:text-indigo-600" />
                      Deslogar
                    </div>
                  </SignOutButton>
                </Menubar.Item>
              </Menubar.Content>
            </Menubar.Menu>
          </Menubar.Root>
        </Sidebar.Header>
        <Sidebar.Content>
          <Sidebar.Group>
            <Sidebar.GroupLabel>Área Restrita</Sidebar.GroupLabel>
            <Sidebar.GroupContent>
              <Sidebar.Menu>
                {sidebarLinks.map(
                  (
                    { label, icon: Icon, path }: NavigationLink,
                    index: number,
                  ) => (
                    <Sidebar.MenuItem key={index}>
                      <Sidebar.MenuSubButton
                        className="flex gap-2 hover:bg-[#ebebeb]"
                        asChild
                      >
                        <Link href={path || ""}>
                          {Icon && <Icon />}
                          {label}
                        </Link>
                      </Sidebar.MenuSubButton>
                    </Sidebar.MenuItem>
                  ),
                )}
              </Sidebar.Menu>
            </Sidebar.GroupContent>
          </Sidebar.Group>
        </Sidebar.Content>
        <Sidebar.Footer>
          <SidebarBackButton />
        </Sidebar.Footer>
      </Sidebar.Root>
    </>
  );
}
