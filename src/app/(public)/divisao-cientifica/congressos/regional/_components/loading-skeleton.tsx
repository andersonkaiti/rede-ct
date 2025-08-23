import { Skeleton } from '@components/ui/skeleton'

export function LoadingSkeleton() {
  return (
    <Skeleton className="space-y-8">
      {Array.from({ length: 3 }).map((_, index: number) => (
        <div
          className="flex h-auto w-full flex-col gap-2 shadow-lg md:h-57.5 md:flex-row"
          key={index}
        >
          <div className="h-64 w-full rounded-t-lg rounded-tr-none bg-gray-300 md:h-auto md:w-2/4 md:rounded-l-lg" />
          <div className="w-full space-y-4 p-6 md:w-3/4">
            <div className="h-8 w-full rounded-full bg-gray-300" />
            <div className="space-y-3">
              <div className="h-5 w-full rounded-full bg-gray-300" />
              <div className="h-5 w-full rounded-full bg-gray-300" />
              <div className="h-5 w-2/3 rounded-full bg-gray-300" />
            </div>
            <div className="h-9 w-full rounded-md bg-gray-300" />
          </div>
        </div>
      ))}
    </Skeleton>
  )
}
