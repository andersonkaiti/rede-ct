import { Skeleton } from '@components/ui/skeleton'

export function LoadingSkeleton() {
  return (
    <Skeleton className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index: number) => (
        <div
          className="flex w-full flex-col gap-2 rounded-lg border border-gray-200 shadow-lg"
          key={index}
        >
          <div className="h-64 w-full rounded-t-lg bg-gray-300" />
          <div className="w-full space-y-4 p-6">
            <div className="h-7 w-full rounded-full bg-gray-300" />
            <div className="space-y-3">
              <div className="h-5.5 w-full rounded-full bg-gray-300" />
              <div className="h-5.5 w-full rounded-full bg-gray-300" />
              <div className="h-5.5 w-2/3 rounded-full bg-gray-300" />
            </div>
            <div className="h-9 w-full rounded-md bg-gray-300" />
          </div>
        </div>
      ))}
    </Skeleton>
  )
}
