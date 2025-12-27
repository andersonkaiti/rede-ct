import { Skeleton } from '@components/ui/skeleton'

export function LoadingSkeleton() {
  return (
    <div className="h-fit space-y-8 p-4">
      <div className="flex w-full items-center gap-4">
        <Skeleton className="size-14 rounded-full" />
        <Skeleton className="h-6 w-28" />
      </div>
      <div className="space-y-4">
        <Skeleton className="h-4.5 w-36 rounded-full" />

        <div className="space-y-2">
          <Skeleton className="h-4 w-48 rounded-full" />
          <Skeleton className="h-3 w-56 rounded-full" />
          <Skeleton className="h-3 w-52 rounded-full" />
          <Skeleton className="h-3 w-48 rounded-full" />
        </div>
      </div>
    </div>
  )
}
