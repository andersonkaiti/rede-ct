import { Skeleton } from '@components/ui/skeleton'
import { ImageIcon } from 'lucide-react'

const ARRAY_SIZE = 9

export function LoadingSkeleton() {
  return (
    <Skeleton className="grid grid-cols-1 gap-10 md:grid-cols-3">
      {[...new Array(ARRAY_SIZE)].map((_, index: number) => (
        <div
          className="flex flex-1 flex-col items-center justify-center gap-8 p-6"
          key={index}
        >
          <div className="flex size-30 items-center justify-center rounded-full bg-gray-300 ring-4 ring-gray-200">
            <ImageIcon className="size-10 text-gray-200" />
          </div>

          <div className="flex w-full flex-grow flex-col items-center justify-between gap-2">
            <div className="h-7 w-full rounded-full bg-gray-300" />
            <div className="h-6.5 w-full rounded-full bg-gray-300" />
            <div className="h-9 w-46 rounded-md bg-gray-300" />
          </div>
        </div>
      ))}
    </Skeleton>
  )
}
