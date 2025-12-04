import { Skeleton } from '@components/ui/skeleton'

const SKELETON_CARD_COUNT = 6

export function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2">
      {Array.from({ length: SKELETON_CARD_COUNT }).map((_, index) => (
        <div className="flex flex-col gap-2" key={index}>
          <Skeleton className="h-80 w-full rounded-md" />

          <div className="flex h-fit grow flex-col gap-4 py-2">
            <div className="space-y-4">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-4 w-48" />
            </div>

            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-36" />

            <Skeleton className="mt-auto h-10 w-full" />
          </div>
        </div>
      ))}
    </div>
  )
}
