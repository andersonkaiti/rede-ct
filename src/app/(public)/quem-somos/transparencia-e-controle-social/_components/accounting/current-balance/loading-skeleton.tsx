import { Skeleton } from '@components/ui/skeleton'

export function LoadingSkeleton() {
  return (
    <div className="h-fit space-y-8 p-4">
      <div className="flex w-full items-center gap-4">
        <Skeleton className="size-14 rounded-full" />
        <Skeleton className="h-6 w-32" />
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-28 rounded-full" />
        <Skeleton className="h-4 w-52 rounded-full" />
      </div>
    </div>
  )
}
