import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@components/ui/collapsible";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@components/ui/sidebar";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { NavigationLink } from "types/navigation-link";

import { SidebarButton } from "./sidebar-button";

interface ISidebarItemProps {
  item: NavigationLink;
}

export function SidebarItem({
  item: { label, icon: Icon, path = "", children },
}: ISidebarItemProps) {
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
    );
  }

  return (
    <SidebarMenuItem>
      <Collapsible defaultOpen className="group/collapsible">
        <CollapsibleTrigger className="flex w-full items-center gap-2" asChild>
          <SidebarMenuButton className="flex w-full cursor-pointer items-center justify-between gap-2 hover:bg-[#ebebeb]">
            <div className="flex items-center gap-2">
              {Icon && <Icon className="size-4" />}
              {label}
            </div>
            <ChevronRight className="transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <SidebarMenuSub>
            {children.map(({ label, icon: Icon, path = "" }, index: number) => (
              <SidebarMenuSubItem key={index}>
                <SidebarButton path={path}>
                  <Link href={path}>
                    {Icon && <Icon />}
                    {label}
                  </Link>
                </SidebarButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}
