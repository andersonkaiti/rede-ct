import Link from "next/link";
import * as Collapsible from "@components/ui/collapsible";
import * as Sidebar from "@components/ui/sidebar";
import { ChevronRight } from "lucide-react";
import { NavigationLink } from "types/navigation-link";

export function SidebarItem({
  label,
  icon: Icon,
  path,
  children,
}: NavigationLink) {
  return (
    <Sidebar.MenuItem>
      {!children ? (
        <Sidebar.MenuButton className="flex gap-2 hover:bg-[#ebebeb]" asChild>
          <Link href={path || ""}>
            {Icon && <Icon />}
            {label}
          </Link>
        </Sidebar.MenuButton>
      ) : (
        <Collapsible.Root defaultOpen className="group/collapsible">
          <Collapsible.Trigger
            className="flex w-full items-center gap-2"
            asChild
          >
            <Sidebar.MenuButton className="flex w-full cursor-pointer items-center justify-between gap-2 hover:bg-[#ebebeb]">
              <div className="flex items-center gap-2">
                {Icon && <Icon className="h-4 w-4" />}
                {label}
              </div>
              <ChevronRight className="transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </Sidebar.MenuButton>
          </Collapsible.Trigger>

          <Collapsible.Content>
            <Sidebar.MenuSub>
              {children.map((child: NavigationLink, index: number) => (
                <Sidebar.MenuSubItem key={index}>
                  <Sidebar.MenuSubButton
                    className="flex gap-2 hover:bg-[#ebebeb]"
                    asChild
                  >
                    <Link href={child.path || ""}>
                      {child.icon && <child.icon />}
                      {child.label}
                    </Link>
                  </Sidebar.MenuSubButton>
                </Sidebar.MenuSubItem>
              ))}
            </Sidebar.MenuSub>
          </Collapsible.Content>
        </Collapsible.Root>
      )}
    </Sidebar.MenuItem>
  );
}
