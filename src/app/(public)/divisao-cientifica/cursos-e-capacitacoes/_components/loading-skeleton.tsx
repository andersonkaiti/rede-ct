import { Skeleton } from "@components/ui/skeleton";

export function LoadingSkeleton() {
  return (
    <Skeleton className="flex h-75 w-full flex-col gap-2 shadow-lg md:flex-row">
      <div className="h-full w-full rounded-l-lg bg-gray-200 md:w-2/4" />
      <div className="w-full space-y-5 p-6 md:w-3/4">
        <div className="h-6.5 w-30 rounded-full bg-gray-200" />
        <div className="h-8 w-full rounded-full bg-gray-200" />

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="size-4 rounded-md bg-gray-200" />
            <div className="h-6 w-74 rounded-full bg-gray-200" />
            <div className="size-1 rounded-full bg-gray-200" />
            <div className="h-6 w-20 rounded-full bg-gray-200" />
          </div>

          <div className="flex items-center gap-2">
            <div className="size-4 rounded-md bg-gray-200" />
            <div className="h-6 w-45.5 rounded-full bg-gray-200" />
          </div>

          <div className="flex items-center gap-2">
            <div className="size-4 rounded-md bg-gray-200" />
            <div className="h-6 w-36 rounded-full bg-gray-200" />
          </div>
        </div>

        <div className="h-9 w-full rounded-md bg-gray-200" />
      </div>
    </Skeleton>
  );
}
