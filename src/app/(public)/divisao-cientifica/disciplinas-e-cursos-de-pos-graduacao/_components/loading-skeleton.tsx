import { Skeleton } from "@components/ui/skeleton";

export function LoadingSkeleton() {
  return (
    <Skeleton className="flex h-37.5 w-full flex-col gap-2 border shadow-lg md:h-123 md:flex-row">
      <div className="h-64 w-full rounded-l-lg bg-gray-200 md:h-auto md:w-2/4 md:rounded-l-lg md:rounded-tr-none" />
      <div className="w-full space-y-4 p-6 md:w-3/4">
        <header className="space-y-6">
          <div className="h-6.5 w-30 rounded-full bg-gray-200" />
          <div className="h-5 w-full rounded-full bg-gray-200" />
        </header>

        <div className="mt-6 space-y-2.5">
          <div className="h-4.5 w-full rounded-full bg-gray-200" />
          <div className="h-4.5 w-full rounded-full bg-gray-200" />
          <div className="h-4.5 w-1/3 rounded-full bg-gray-200" />
        </div>

        <div className="space-y-3.5">
          <div className="flex items-center gap-2 p-2">
            <div className="size-9 rounded-md bg-gray-200" />
            <div className="space-y-1">
              <div className="h-5 w-67.5 rounded-full bg-gray-200" />
              <div className="h-5 w-26 rounded-full bg-gray-200" />
            </div>
          </div>

          <div className="flex items-center gap-2 p-2">
            <div className="size-9 rounded-md bg-gray-200" />
            <div className="space-y-1">
              <div className="h-5 w-8.5 rounded-full bg-gray-200" />
              <div className="h-5 w-40 rounded-full bg-gray-200" />
            </div>
          </div>

          <div className="flex items-center gap-2 p-2">
            <div className="size-9 rounded-md bg-gray-200" />
            <div className="space-y-1">
              <div className="h-5 w-9.5 rounded-full bg-gray-200" />
              <div className="h-5 w-31.5 rounded-full bg-gray-200" />
            </div>
          </div>
        </div>

        <div className="h-9 w-full rounded-md bg-gray-200" />
      </div>
    </Skeleton>
  );
}
