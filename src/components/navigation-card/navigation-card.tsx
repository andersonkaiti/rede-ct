import Link from "next/link";
import { cn } from "@/utils/cn";
import { ArrowRightIcon } from "lucide-react";
import { INavigationCardProps } from ".";

export function NavigationCardRoot({
  children,
  href,
  className,
  ...props
}: INavigationCardProps) {
  return (
    <Link href={href} className="group" {...props}>
      <div
        className={cn(
          "flex items-center gap-4 rounded-md p-6 text-justify shadow-[0_0_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-xl",
          className,
        )}
      >
        {children}
        <div className="ml-auto">
          <ArrowRightIcon className="text-indigo-500 transition-all duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
