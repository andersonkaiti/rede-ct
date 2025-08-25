import { Skeleton } from '@components/ui/skeleton'

export function LoadingSkeleton() {
  return (
    <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
      {Array.from({ length: 9 }).map((_, index: number) => (
        <div
          className="flex w-full flex-col gap-6 rounded-lg p-6 shadow-lg"
          key={index}
        >
          <Skeleton className="mb-3.5 h-8 w-full rounded-full" />

          <div className="space-y-1">
            <Skeleton className="h-5 w-full rounded-full" />
            <Skeleton className="h-5 w-1/3 rounded-full" />
          </div>

          <div className="space-y-3">
            <Skeleton className="h-4 w-full rounded-full" />
            <Skeleton className="h-4 w-full rounded-full" />
            <Skeleton className="h-4 w-full rounded-full" />
            <Skeleton className="h-4 w-2/3 rounded-full" />
          </div>

          <Skeleton className="h-7.5 w-1/3 rounded-full" />

          <Skeleton className="h-9 w-full rounded-md" />
        </div>
      ))}
    </div>
  )
}
