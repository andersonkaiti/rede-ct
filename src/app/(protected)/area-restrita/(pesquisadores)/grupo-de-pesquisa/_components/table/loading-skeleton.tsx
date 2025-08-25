import { Skeleton } from '@components/ui/skeleton'

const ARRAY_SIZE = 4

export function LoadingSkeleton() {
  return (
    <div className="h-full w-full border shadow-sm [&_div:last-child]:border-0 [&_div]:border-b">
      <div className="flex h-13 gap-4 p-4">
        <Skeleton className="h-full flex-2 rounded-md" />
        <Skeleton className="h-full flex-1 rounded-md" />
      </div>
      {[...new Array(ARRAY_SIZE)].map((_, index: number) => (
        <div className="flex h-17 gap-4 p-4" key={index}>
          <Skeleton className="h-full flex-2 rounded-md" />
          <Skeleton className="h-full flex-1 rounded-md" />
        </div>
      ))}
    </div>
  )
}
