import { Skeleton } from '@components/ui/skeleton'
import { UserCard } from '@components/ui/user-card'

const SKELETON_COUNT = 9

export function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
      {Array.from({ length: SKELETON_COUNT }).map((_, index: number) => (
        <UserCard key={index}>
          <div className="flex flex-grow flex-col items-center justify-between gap-2">
            <Skeleton className="size-40 rounded-full" />
            <Skeleton className="h-7 w-32 rounded-full" />
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-9 w-20" />
            <div className="mt-4 border-slate-200 border-t pt-4 dark:border-slate-100/20">
              <Skeleton className="h-3 w-50" />
            </div>
          </div>
        </UserCard>
      ))}
    </div>
  )
}
