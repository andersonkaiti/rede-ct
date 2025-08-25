import { Skeleton } from '@components/ui/skeleton'

export function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index: number) => (
        <div
          className="flex w-full flex-col gap-2 rounded-lg shadow-lg"
          key={index}
        >
          <Skeleton className="h-64 w-full rounded-t-lg" />
          <div className="w-full space-y-4 p-6">
            <Skeleton className="h-7 w-full rounded-full" />
            <div className="space-y-3">
              <Skeleton className="h-5.5 w-full rounded-full" />
              <Skeleton className="h-5.5 w-full rounded-full" />
              <Skeleton className="h-5.5 w-2/3 rounded-full" />
            </div>
            <div className="h-9 w-full rounded-md" />
          </div>
        </div>
      ))}
    </div>
  )
}
