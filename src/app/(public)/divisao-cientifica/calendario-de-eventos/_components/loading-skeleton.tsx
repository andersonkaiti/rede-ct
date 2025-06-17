import { Skeleton } from "@components/ui/skeleton";

export function LoadingSkeleton() {
  return (
    <Skeleton className="flex h-137.5 w-full flex-col gap-2 border shadow-sm md:h-73.5 md:flex-row">
      <div className="h-64 w-full bg-gray-200 md:h-auto md:w-2/4 md:rounded-l-lg md:rounded-tr-none" />
      <div className="w-full space-y-4.5 p-6 md:w-3/4">
        <div className="space-y-7">
          <div className="flex items-center gap-2">
            <div className="size-7.5 rounded-md bg-gray-200" />
            <div className="space-y-1">
              <div className="h-3.5 w-67.5 rounded-full bg-gray-200" />
              <div className="h-3.5 w-26 rounded-full bg-gray-200" />
            </div>
          </div>

          <header className="space-y-2">
            <div className="h-5 w-full rounded-full bg-gray-200" />
            <div className="h-5 w-3/4 rounded-full bg-gray-200" />
            <div className="h-5 w-1/3 rounded-full bg-gray-200" />
          </header>
        </div>

        <div className="mt-6 space-y-2">
          <div className="h-3 w-full rounded-full bg-gray-200" />
          <div className="h-3 w-1/3 rounded-full bg-gray-200" />
        </div>

        <div className="h-9 w-full rounded-md bg-gray-200" />
      </div>
    </Skeleton>
  );
}
