import { Separator } from '@components/ui/separator'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
} from '@components/ui/sidebar'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import type { NavigationLink } from 'types/navigation-link'

import { SidebarBackButton } from './sidebar-back-button'
import { SidebarItem } from './sidebar-item'
import { sidebarLinks } from './sidebar-links'
import { LoadingSkeleton } from './user-profile/loading-skeleton'

const DynamicUserProfile = dynamic(() =>
  import('./user-profile/user-profile').then((mod) => mod.UserProfile)
)

export function SidebarContainer() {
  return (
    <Sidebar side="left" variant="sidebar">
      <SidebarHeader className="py-4">
        <Suspense fallback={<LoadingSkeleton />}>
          <DynamicUserProfile />
        </Suspense>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarLinks.map((link: NavigationLink, index: number) => (
                <SidebarItem item={link} key={index} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <Separator />
      <SidebarFooter>
        <SidebarBackButton />
      </SidebarFooter>
    </Sidebar>
  )
}
