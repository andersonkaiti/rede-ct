import { Skeleton } from "@components/ui/skeleton";

export function LoadingSkeleton() {
  return (
    <Skeleton className="flex h-176.5 w-full flex-col gap-2 shadow-lg md:h-99.5 md:flex-row">
      <div className="h-full w-full rounded-t-lg bg-gray-200 md:w-2/4 md:rounded-l-lg md:rounded-tr-none" />
      <div className="w-full space-y-5 p-6 md:w-3/4">
        <div className="h-6.5 w-30 rounded-full bg-gray-200" />
        <div className="h-8 w-full rounded-full bg-gray-200" />

        <div className="space-y-5">
          <div className="flex items-center gap-2 p-2">
            <div className="size-9 rounded-md bg-gray-200" />
            <div className="space-y-1">
              <div className="h-4 w-67.5 rounded-full bg-gray-200" />
              <div className="h-4 w-26 rounded-full bg-gray-200" />
            </div>
          </div>

          <div className="flex items-center gap-2 p-2">
            <div className="size-9 rounded-md bg-gray-200" />
            <div className="space-y-1">
              <div className="h-4 w-8.5 rounded-full bg-gray-200" />
              <div className="h-4 w-40 rounded-full bg-gray-200" />
            </div>
          </div>

          <div className="flex items-center gap-2 p-2">
            <div className="size-9 rounded-md bg-gray-200" />
            <div className="space-y-1">
              <div className="h-4 w-9.5 rounded-full bg-gray-200" />
              <div className="h-4 w-31.5 rounded-full bg-gray-200" />
            </div>
          </div>
        </div>

        <div className="h-9 w-full rounded-md bg-gray-200" />
      </div>
    </Skeleton>
  );
}
