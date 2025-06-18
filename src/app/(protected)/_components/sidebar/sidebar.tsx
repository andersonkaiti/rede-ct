import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
} from "@components/ui/sidebar";
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
    <Sidebar side="left" variant="sidebar">
      <SidebarHeader className="py-4">
        <Suspense fallback={<LoadingSkeleton />}>
          <DynamicUserProfile />
        </Suspense>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Área Restrita</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarLinks.map((link: NavigationLink, index: number) => (
                <SidebarItem key={index} item={link} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarBackButton />
      </SidebarFooter>
    </Sidebar>
  );
}
