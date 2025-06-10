import * as Sidebar from "@components/ui/sidebar";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { NavigationLink } from "types/navigation-link";

import { SidebarBackButton } from "./sidebar-back-button";
import { SidebarItem } from "./sidebar-item";
import { sidebarLinks } from "./sidebar-links";
import { LoadingSkeleton } from "./user-profile/loading-skeleton";

const DynamicUserProfile = dynamic(() =>
  import("./user-profile/user-profile").then((mod) => mod.UserProfile),
);

export function SidebarContainer() {
  return (
    <Sidebar.Root side="left" variant="sidebar">
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
