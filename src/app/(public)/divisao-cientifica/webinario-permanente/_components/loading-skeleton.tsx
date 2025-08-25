import { Skeleton } from '@components/ui/skeleton'

export function LoadingSkeleton() {
  return (
    <div className="flex h-69.5 w-full flex-col gap-2 border shadow-sm md:flex-row">
      <Skeleton className="h-full w-full rounded-l-lg md:w-2/4" />
      <div className="w-full space-y-4 p-6 md:w-3/4">
        <header className="space-y-4">
          <div className="flex h-8 items-center gap-2">
            <Skeleton className="size-8 rounded-md" />
            <div className="space-y-1">
              <Skeleton className="h-4 w-36 rounded-full" />
              <Skeleton className="h-4 w-12.5 rounded-full" />
            </div>
          </div>
          <div className="space-y-3">
            <Skeleton className="h-5 w-full rounded-full" />
            <Skeleton className="h-5 w-2/3 rounded-full" />
          </div>
        </header>
        <div className="mt-6 space-y-2">
          <Skeleton className="h-5.5 w-27.5 rounded-full" />
          <div className="flex items-center gap-2">
            <Skeleton className="size-6 rounded-full" />
            <Skeleton className="h-5 w-88.5 rounded-full" />
          </div>
        </div>
        <Skeleton className="h-9 w-full rounded-md" />
      </div>
    </div>
  )
}
