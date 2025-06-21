import { Skeleton } from "@components/ui/skeleton";

export function LoadingSkeleton() {
  return (
    <Skeleton className="h-full w-full border [&_div]:border-b [&_div:last-child]:border-0">
      <div className="flex h-[40.5px] gap-4 px-2 py-3">
        <Skeleton className="h-full flex-4 rounded-md bg-gray-200" />
        <Skeleton className="h-full flex-3 rounded-md bg-gray-200" />
        <Skeleton className="h-full flex-1 rounded-md bg-gray-200" />
      </div>
      {[...Array(9)].map((_, index) => (
        <div key={index} className="flex h-[37.14px] gap-4 p-3">
          <Skeleton className="h-full flex-4 rounded-md bg-gray-200" />
          <Skeleton className="h-full flex-3 rounded-md bg-gray-200" />
          <Skeleton className="h-full flex-1 rounded-md bg-gray-200" />
        </div>
      ))}
    </Skeleton>
  );
}
