import { Skeleton } from "@components/ui/skeleton";

export function LoadingInputSkeleton() {
  return (
    <Skeleton>
      <div className="h-9 w-full rounded-md bg-gray-200" />
    </Skeleton>
  );
}
