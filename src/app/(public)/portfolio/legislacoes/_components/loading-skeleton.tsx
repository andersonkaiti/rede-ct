import { Skeleton } from '@components/ui/skeleton'

const SKELETON_COUNT = 7

export function LoadingSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
        <Skeleton key={index} className="h-12.5 w-full rounded-lg" />
      ))}
    </div>
  )
}
