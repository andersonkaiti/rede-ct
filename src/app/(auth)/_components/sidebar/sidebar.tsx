import dynamic from "next/dynamic";
import { Suspense } from "react";
import * as Sidebar from "@components/ui/sidebar";
import { NavigationLink } from "types/navigation-link";
import { UserProfileSkeleton } from "../user-profile/user-profile-skeleton";
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
        <Suspense fallback={<UserProfileSkeleton />}>
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
