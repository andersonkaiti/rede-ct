import { Skeleton } from '@components/ui/skeleton'

export function LoadingSkeleton() {
  return (
    <div className="flex h-137.5 w-full flex-col gap-2 border shadow-sm md:h-73.5 md:flex-row">
      <Skeleton className="h-64 w-full md:h-auto md:w-2/4 md:rounded-l-lg md:rounded-tr-none" />
      <div className="w-full space-y-4.5 p-6 md:w-3/4">
        <div className="space-y-7">
          <div className="flex items-center gap-2">
            <Skeleton className="size-7.5 rounded-md" />
            <div className="space-y-1">
              <Skeleton className="h-3.5 w-67.5 rounded-full" />
              <Skeleton className="h-3.5 w-26 rounded-full" />
            </div>
          </div>

          <header className="space-y-2">
            <Skeleton className="h-5 w-full rounded-full" />
            <Skeleton className="h-5 w-3/4 rounded-full" />
            <Skeleton className="h-5 w-1/3 rounded-full" />
          </header>
        </div>

        <div className="mt-6 space-y-2">
          <Skeleton className="h-3 w-full rounded-full" />
          <Skeleton className="h-3 w-1/3 rounded-full" />
        </div>

        <Skeleton className="h-9 w-full rounded-md" />
      </div>
    </div>
  )
}
