import { Skeleton } from '@components/ui/skeleton'

export function LoadingSkeleton() {
  return (
    <div className="h-fit space-y-8 p-4">
      <div className="flex w-full items-center gap-4">
        <Skeleton className="size-13 rounded-full" />
        <Skeleton className="h-6 w-40" />
      </div>
      <div>
        <Skeleton className="h-10.5 w-full rounded-xl" />
      </div>
    </div>
  )
}
