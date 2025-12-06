import { Skeleton } from '@components/ui/skeleton'

const SKELETON_CARD_COUNT = 6

export function LoadingSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      {Array.from({ length: SKELETON_CARD_COUNT }).map((_, index) => (
        <div className="flex flex-col gap-4 rounded-md border p-6" key={index}>
          <Skeleton className="h-6 w-3/4" />

          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>

          <Skeleton className="h-4 w-24" />

          <Skeleton className="mt-2 h-10 w-full" />
        </div>
      ))}
    </div>
  )
}
