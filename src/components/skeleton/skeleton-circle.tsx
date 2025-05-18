import { cn } from "@utils/cn";

export function SkeletonCircle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "h-10 w-10 animate-pulse rounded-full bg-gray-200",
        className,
      )}
      {...props}
    />
  );
}
