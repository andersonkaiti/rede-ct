import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@components/ui/collapsible";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@components/ui/sidebar";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { NavigationLink } from "types/navigation-link";

export function SidebarItem({
  label,
  icon: Icon,
  path,
  children,
}: NavigationLink) {
  return (
    <SidebarMenuItem>
      {!children ? (
        <SidebarMenuButton className="flex gap-2 hover:bg-[#ebebeb]" asChild>
          <Link href={path || ""}>
            {Icon && <Icon />}
            {label}
          </Link>
        </SidebarMenuButton>
      ) : (
        <Collapsible defaultOpen className="group/collapsible">
          <CollapsibleTrigger
            className="flex w-full items-center gap-2"
            asChild
          >
            <SidebarMenuButton className="flex w-full cursor-pointer items-center justify-between gap-2 hover:bg-[#ebebeb]">
              <div className="flex items-center gap-2">
                {Icon && <Icon className="h-4 w-4" />}
                {label}
              </div>
              <ChevronRight className="transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <SidebarMenuSub>
              {children.map((child: NavigationLink, index: number) => (
                <SidebarMenuSubItem key={index}>
                  <SidebarMenuSubButton
                    className="flex gap-2 hover:bg-[#ebebeb]"
                    asChild
                  >
                    <Link href={child.path || ""}>
                      {child.icon && <child.icon />}
                      {child.label}
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </Collapsible>
      )}
    </SidebarMenuItem>
  );
}
