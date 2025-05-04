import Link from "next/link";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@lib/utils";
import { NavLink } from "./navigation-links";
import { NavigationBarIcon } from "./navigation-bar-icon";

export interface INavLinkProps {
  link: NavLink;
  onMouseEnter: (index: number, element: HTMLElement) => void;
  hovering: number | null;
  index: number;
  showNavigationBar: boolean;
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

export function NavigationLink({
  link: { label, children, path = "/" },
  onMouseEnter,
  hovering,
  index,
  showNavigationBar,
  activeIndex,
  setActiveIndex,
}: INavLinkProps) {
  const hasChildren = children && children?.length > 0;

  const isHovered = hovering === index;
  const isActived = activeIndex === index;

  function handleMouseEnter(event: React.MouseEvent<HTMLElement>) {
    if (hasChildren && !showNavigationBar) {
      onMouseEnter(index, event.currentTarget);
    }
  }

  function handleMouseClick() {
    if (isActived) {
      setActiveIndex(null);
      return;
    }

    if (hasChildren && showNavigationBar) {
      setActiveIndex(index);
    }
  }

  return (
    <div className="2lg:w-fit flex w-full flex-col items-center">
      <Link
        href={path}
        className="group 2lg:rounded-full bg-background hover:text-red-200-foreground focus:text-red-200-foreground data-[state=open]:text-red-200-foreground focus-visible:ring-ring/50 inline-flex h-9 w-full items-center justify-between rounded-md px-4 py-2 text-sm font-medium transition-[color,box-shadow] outline-none hover:bg-gray-400/25 focus:bg-gray-400/25 focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-gray-400/25 data-[state=open]:hover:bg-gray-400/25 data-[state=open]:focus:bg-gray-400/25"
        onMouseEnter={handleMouseEnter}
        onClick={handleMouseClick}
        data-state={isHovered || isActived ? "open" : "closed"}
      >
        {label}
        {children && (
          <ChevronDownIcon
            className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
            aria-hidden="true"
          />
        )}
      </Link>

      {showNavigationBar && hasChildren && (
        <div
          className={cn(
            "2lg:w-52 flex w-full flex-col items-center gap-1 overflow-hidden pl-5 transition-all duration-300 ease-in-out",
            isActived ? "max-h-120 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          {children.map(({ path, label, icon }: NavLink, index: number) => (
            <Link
              key={index}
              href={path!}
              className="2lg:rounded-full mt-2 flex w-full items-center gap-2 rounded-md p-2 text-center text-sm hover:bg-gray-400/25"
            >
              <NavigationBarIcon icon={icon} />
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
