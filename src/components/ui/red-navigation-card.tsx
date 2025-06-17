import { cn } from "@utils/cn";
import { ArrowRightIcon } from "lucide-react";
import Link, { LinkProps } from "next/link";

interface INavigationCardProps
  extends LinkProps,
    React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export function RedNavigationCard({
  children,
  href,
  className,
  ...props
}: INavigationCardProps) {
  return (
    <Link href={href} className="group" {...props}>
      <div
        className={cn(
          "from-primary flex items-center justify-between rounded-md bg-gradient-to-br via-red-600 to-red-700 p-10 text-white md:p-10",
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
