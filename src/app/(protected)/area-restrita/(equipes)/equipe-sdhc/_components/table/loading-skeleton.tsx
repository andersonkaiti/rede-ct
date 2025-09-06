import { Skeleton } from '@components/ui/skeleton'

const ARRAY_SIZE = 8

export function LoadingSkeleton() {
  return (
    <div className="h-full w-full rounded-md border [&_div:last-child]:border-0 [&_div]:border-b">
      <div className="flex h-[40.5px] gap-4 px-2 py-3">
        <Skeleton className="h-full flex-2 rounded-md" />
        <Skeleton className="h-full flex-2 rounded-md" />
        <Skeleton className="h-full flex-2 rounded-md" />
        <Skeleton className="h-full flex-2 rounded-md" />
        <Skeleton className="h-full flex-2 rounded-md" />
        <Skeleton className="h-full flex-2 rounded-md" />
        <Skeleton className="h-full flex-2 rounded-md" />
      </div>
      {[...new Array(ARRAY_SIZE)].map((_, index: number) => (
        <div className="flex h-[52.4px] gap-4 p-3" key={index}>
          <Skeleton className="h-full flex-2 rounded-md" />
          <Skeleton className="h-full flex-2 rounded-md" />
          <Skeleton className="h-full flex-2 rounded-md" />
          <Skeleton className="h-full flex-2 rounded-md" />
          <Skeleton className="h-full flex-2 rounded-md" />
          <Skeleton className="h-full flex-2 rounded-md" />
          <Skeleton className="h-full flex-2 rounded-md" />
        </div>
      ))}
    </div>
  )
}
