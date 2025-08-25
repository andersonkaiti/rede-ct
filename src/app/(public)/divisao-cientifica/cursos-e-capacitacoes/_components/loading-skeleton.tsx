import { Skeleton } from '@components/ui/skeleton'

export function LoadingSkeleton() {
  return (
    <div className="flex h-176.5 w-full flex-col gap-2 shadow-lg md:h-99.5 md:flex-row">
      <Skeleton className="h-full w-full rounded-t-lg md:w-2/4 md:rounded-l-lg md:rounded-tr-none" />
      <div className="w-full space-y-5 p-6 md:w-3/4">
        <Skeleton className="h-6.5 w-30 rounded-full" />
        <Skeleton className="h-8 w-full rounded-full" />

        <div className="space-y-5">
          <div className="flex items-center gap-2 p-2">
            <Skeleton className="size-9 rounded-md" />
            <div className="space-y-1">
              <Skeleton className="h-4 w-67.5 rounded-full" />
              <Skeleton className="h-4 w-26 rounded-full" />
            </div>
          </div>

          <div className="flex items-center gap-2 p-2">
            <Skeleton className="size-9 rounded-md" />
            <div className="space-y-1">
              <Skeleton className="h-4 w-8.5 rounded-full" />
              <Skeleton className="h-4 w-40 rounded-full" />
            </div>
          </div>

          <div className="flex items-center gap-2 p-2">
            <Skeleton className="size-9 rounded-md" />
            <div className="space-y-1">
              <Skeleton className="h-4 w-9.5 rounded-full" />
              <Skeleton className="h-4 w-31.5 rounded-full" />
            </div>
          </div>
        </div>

        <div className="h-9 w-full rounded-md" />
      </div>
    </div>
  )
}
