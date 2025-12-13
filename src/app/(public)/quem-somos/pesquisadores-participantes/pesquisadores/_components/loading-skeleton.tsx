import { Skeleton } from '@components/ui/skeleton'

const SKELETON_COUNT = 6

export function LoadingSkeleton() {
  return (
    <div className="mt-4 grid w-full gap-6 lg:grid-cols-2">
      {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
        <div
          className="flex w-full flex-col overflow-hidden rounded-lg border border-border bg-background"
          key={i}
        >
          <header className="mb-2 flex flex-row items-center gap-4 p-6">
            <Skeleton className="size-20 shrink-0 rounded-full" />

            <div className="flex flex-col items-start justify-center gap-1">
              <Skeleton className="h-5 w-40 rounded-full" />

              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-24 rounded-full" />
                <Skeleton className="h-6 w-16 rounded-md" />
              </div>
              <Skeleton className="h-4 w-32 rounded-full" />
            </div>
          </header>

          <div className="p-6">
            <div className="flex w-full cursor-pointer items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-4 rounded" />
                <Skeleton className="h-4 w-24 rounded-full" />
              </div>
              <Skeleton className="h-4 w-4 rounded" />
            </div>
          </div>

          <div className="p-6">
            <Skeleton className="mb-3 h-4 w-20 rounded-full" />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <Skeleton className="h-11 w-11 rounded-lg" />
                <div className="flex flex-col justify-center">
                  <Skeleton className="mb-0.5 h-3 w-16 rounded-full" />
                  <Skeleton className="h-4 w-20 rounded-full" />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Skeleton className="h-11 w-11 rounded-lg" />
                <div className="flex w-full flex-col justify-center">
                  <Skeleton className="mb-0.5 h-3 w-12 rounded-full" />
                  <div className="mt-0.5 flex flex-wrap gap-1">
                    <Skeleton className="h-5 w-16 rounded-full" />
                    <Skeleton className="h-5 w-20 rounded-full" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Skeleton className="h-11 w-11 rounded-lg" />
                <div className="flex flex-col justify-center">
                  <Skeleton className="mb-0.5 h-3 w-16 rounded-full" />
                  <Skeleton className="h-4 w-32 rounded-full" />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Skeleton className="h-11 w-11 rounded-lg" />
                <div className="flex flex-col justify-center">
                  <Skeleton className="mb-0.5 h-3 w-20 rounded-full" />
                  <Skeleton className="h-4 w-28 rounded-full" />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Skeleton className="h-11 w-11 rounded-lg" />
                <div className="flex flex-col justify-center">
                  <Skeleton className="mb-0.5 h-3 w-20 rounded-full" />
                  <Skeleton className="h-4 w-36 rounded-full" />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Skeleton className="h-11 w-11 rounded-lg" />
                <div className="flex flex-col justify-center">
                  <Skeleton className="mb-0.5 h-3 w-18 rounded-full" />
                  <Skeleton className="h-4 w-32 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 p-6">
            <Skeleton className="h-8 w-48 rounded-md" />
            <Skeleton className="h-8 w-22 rounded-md" />
          </div>
        </div>
      ))}
    </div>
  )
}
