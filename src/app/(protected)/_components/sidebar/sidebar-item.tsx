import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@components/ui/collapsible'
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from '@components/ui/sidebar'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import type { NavigationLink } from 'types/navigation-link'
import { SidebarButton } from './sidebar-button'

interface ISidebarItemProps {
  item: NavigationLink
  isAdmin: boolean
}

export function SidebarItem({
  item: { label, icon: Icon, path = '', children, isProtected },
  isAdmin,
}: ISidebarItemProps) {
  if (isProtected && !isAdmin) {
    return null
  }

  if (!children?.length) {
    return (
      <SidebarMenuItem>
        <SidebarButton path={path}>
          <Link href={path}>
            {Icon && <Icon />}
            {label}
          </Link>
        </SidebarButton>
      </SidebarMenuItem>
    )
  }

  return (
    <SidebarMenuItem>
      <Collapsible className="group/collapsible" defaultOpen>
        <CollapsibleTrigger asChild className="flex w-full items-center gap-2">
          <SidebarMenuButton className="flex w-full cursor-pointer items-center justify-between gap-2 hover:bg-secondary">
            <div className="flex items-center gap-2">
              {Icon && <Icon className="size-4" />}
              {label}
            </div>
            <ChevronRight className="transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <SidebarMenuSub>
            {children.map(
              ({
                label: childLabel,
                icon: ChildIcon,
                path: childPath = '',
              }) => (
                <SidebarMenuSubItem key={childPath || childLabel}>
                  <SidebarButton path={childPath}>
                    <Link href={childPath}>
                      {ChildIcon && <ChildIcon />}
                      {childLabel}
                    </Link>
                  </SidebarButton>
                </SidebarMenuSubItem>
              )
            )}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  )
}
