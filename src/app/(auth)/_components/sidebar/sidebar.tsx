import dynamic from "next/dynamic";
import { Suspense } from "react";
import * as Sidebar from "@components/ui/sidebar";
import { Skeleton } from "@components/ui/skeleton";
import { User } from "lucide-react";
import { NavigationLink } from "types/navigation-link";
import { SidebarBackButton } from "./sidebar-back-button";
import { SidebarItem } from "./sidebar-item";
import { sidebarLinks } from "./sidebar-links";

const DynamicUserProfile = dynamic(() =>
  import("../user-profile/user-profile").then((mod) => mod.UserProfile),
);

export function SidebarContainer() {
  return (
    <Sidebar.Root
      className="sticky top-0 left-0"
      side="left"
      variant="sidebar"
      collapsible="offcanvas"
    >
      <Sidebar.Header className="py-4">
        <Suspense fallback={<LoadingSkeleton />}>
          <DynamicUserProfile />
        </Suspense>
      </Sidebar.Header>
      <Sidebar.Content>
        <Sidebar.Group>
          <Sidebar.GroupLabel>Área Restrita</Sidebar.GroupLabel>
          <Sidebar.GroupContent>
            <Sidebar.Menu>
              {sidebarLinks.map((link: NavigationLink, index: number) => (
                <SidebarItem key={index} {...link} />
              ))}
            </Sidebar.Menu>
          </Sidebar.GroupContent>
        </Sidebar.Group>
      </Sidebar.Content>
      <Sidebar.Footer>
        <SidebarBackButton />
      </Sidebar.Footer>
    </Sidebar.Root>
  );
}

export function LoadingSkeleton() {
  return (
    <Skeleton className="flex items-center justify-between gap-2 px-2">
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-gray-300">
          <User className="h-5 w-5 text-gray-200" />
        </div>
        <div className="h-4 w-24 rounded-full bg-gray-200" />
      </div>
      <div className="h-4 w-2 rounded-full bg-gray-200" />
    </Skeleton>
  );
}
