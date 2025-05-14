import { cn } from "@lib/utils";

export function SkeletonTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "h-3 w-48 rounded-full bg-gray-200 dark:bg-gray-700",
        className,
      )}
      {...props}
    />
  );
}
