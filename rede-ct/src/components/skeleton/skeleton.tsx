import { cn } from "@lib/utils";
import { ISkeletonProps } from ".";

export function SkeletonRoot({
  children,
  className,
  ...props
}: ISkeletonProps) {
  return (
    <div className={cn("animate-pulse rounded-md", className)} {...props}>
      {children}
    </div>
  );
}
