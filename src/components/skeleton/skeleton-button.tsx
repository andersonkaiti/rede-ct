import { cn } from "@/utils/cn";

export function SkeletonButton({
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn("rounded-full bg-gray-200 dark:bg-gray-700", className)}
      {...props}
    />
  );
}
