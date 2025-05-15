import { cn } from "@/utils/cn";

export function SkeletonText({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700",
        className,
      )}
      {...props}
    />
  );
}
