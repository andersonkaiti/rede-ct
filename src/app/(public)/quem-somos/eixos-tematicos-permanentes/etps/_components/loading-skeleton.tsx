import { Skeleton } from '@components/ui/skeleton'

export function LoadingSkeleton() {
  return (
    <div className="space-y-2">
      <div className="space-y-2 py-6">
        {Array.from({ length: 9 }).map((_, index) => (
          <div className="border-b py-4 shadow-sm" key={index}>
            <div className="flex justify-between gap-4">
              <div className="flex grow flex-col gap-2">
                <Skeleton className="h-6 w-1/3 rounded-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
              <Skeleton className="size-5 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
