import { Skeleton } from '@components/ui/skeleton'

const ARRAY_SIZE = 5

export function LoadingTableSkeleton() {
  return (
    <Skeleton className="h-fit w-full border [&_div:last-child]:border-0 [&_div]:border-b">
      <div className="flex h-[40.5px] gap-4 px-2 py-3">
        <div className="h-full flex-4 rounded-md bg-gray-200" />
        <div className="h-full flex-3 rounded-md bg-gray-200" />
        <div className="h-full flex-1 rounded-md bg-gray-200" />
      </div>
      {[...new Array(ARRAY_SIZE)].map((_, index: number) => (
        <div className="flex h-[52.4px] gap-4 p-3" key={index}>
          <div className="h-full flex-4 rounded-md bg-gray-200" />
          <div className="h-full flex-3 rounded-md bg-gray-200" />
          <div className="h-full flex-1 rounded-md bg-gray-200" />
        </div>
      ))}
    </Skeleton>
  )
}
