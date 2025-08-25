import { Skeleton } from '@components/ui/skeleton'

export function LoadingSkeleton() {
  return (
    <div className="flex h-[493px] w-full flex-col gap-2 border shadow-lg md:h-123 md:flex-row">
      <div className="h-64 w-full rounded-l-lg md:h-auto md:w-2/4 md:rounded-l-lg md:rounded-tr-none" />
      <div className="w-full space-y-4 p-6 md:w-3/4">
        <header className="space-y-7">
          <Skeleton className="h-6.5 w-30 rounded-full" />
          <Skeleton className="h-6 w-full rounded-full" />
        </header>

        <div className="mt-6 space-y-2.5">
          <Skeleton className="h-4.5 w-full rounded-full" />
          <Skeleton className="h-4.5 w-full rounded-full" />
          <Skeleton className="h-4.5 w-1/3 rounded-full" />
        </div>

        <div className="space-y-5.5">
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
