import Link from "next/link";
import { cn } from "@/utils/cn";
import { NavigationLink as NavigationLinkType } from "types/navigation-link";
import { NavigationBarIcon } from "./navigation-bar-icon";

export interface IDropdownProps {
  leftOffset: number | null;
  heightOffset: number | null;
  navigationLinks: NavigationLinkType[];
  hovering: number;
  refs: React.RefObject<(HTMLElement | null)[]>;
}

export function Dropdown({
  heightOffset,
  leftOffset,
  hovering,
  navigationLinks,
  refs,
}: IDropdownProps) {
  const PADDING_2 = 8;

  return (
    <div
      style={{
        left: leftOffset || 0,
        minHeight: (heightOffset || 0) + PADDING_2 * 2,
        right: "1rem",
      }}
      className="absolute top-14 w-fit overflow-hidden rounded-lg border border-gray-500/40 bg-white p-2 shadow transition-all duration-300"
    >
      {navigationLinks.map(
        ({ children }: NavigationLinkType, index: number) => (
          <div
            className={cn(
              "flex-col gap-2 transition-opacity",
              hovering === index ? "flex" : "hidden",
              hovering === index
                ? "transform-none"
                : hovering > index
                  ? "-translate-x-24"
                  : "translate-x-24",
            )}
            key={index}
            ref={(element) => {
              refs.current[index] = element;
            }}
          >
            {children?.map(
              (
                { path, label, icon }: NavigationLinkType,
                childIndex: number,
              ) => (
                <Link
                  href={path!}
                  key={`${index}-${childIndex}`}
                  className="group flex items-center gap-2 truncate rounded-md p-2 text-sm transition-colors"
                >
                  <NavigationBarIcon icon={icon} />
                  {label}
                </Link>
              ),
            )}
          </div>
        ),
      )}
    </div>
  );
}
