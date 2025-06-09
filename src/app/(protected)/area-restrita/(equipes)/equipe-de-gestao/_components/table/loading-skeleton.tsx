import { Skeleton } from "@components/ui/skeleton";

export function LoadingSkeleton() {
  return (
    <Skeleton className="h-full w-full border shadow-sm [&_div]:border-b [&_div:last-child]:border-0">
      <div className="flex h-13 gap-4 p-4">
        <Skeleton className="h-full flex-1 rounded-md bg-gray-200" />
        <Skeleton className="h-full flex-2 rounded-md bg-gray-200" />
      </div>
      {[...Array(4)].map((_, index) => (
        <div key={index} className="flex h-17 gap-4 p-4">
          <Skeleton className="h-full flex-1 rounded-md bg-gray-200" />
          <Skeleton className="h-full flex-2 rounded-md bg-gray-200" />
        </div>
      ))}
    </Skeleton>
  );
}
