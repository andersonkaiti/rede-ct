import Link from "next/link";
import { cn } from "@/utils/cn";
import { ArrowRightIcon } from "lucide-react";
import { INavigationCardProps } from ".";

export function BlueNavigationCard({
  children,
  href,
  className,
  ...props
}: INavigationCardProps) {
  return (
    <Link href={href} className="group" {...props}>
      <div
        className={cn(
          "flex items-center justify-between rounded-md bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700 p-10 text-white md:p-10",
          className,
        )}
      >
        {children}
        <div className="ml-auto">
          <ArrowRightIcon className="text-white transition-all duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
