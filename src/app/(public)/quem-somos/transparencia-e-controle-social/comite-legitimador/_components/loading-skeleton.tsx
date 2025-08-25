import { Skeleton } from '@components/ui/skeleton'
import { ImageIcon } from 'lucide-react'

const ARRAY_SIZE = 9

export function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
      {[...new Array(ARRAY_SIZE)].map((_, index: number) => (
        <div
          className="flex flex-1 flex-col items-center justify-center gap-8 p-6"
          key={index}
        >
          <Skeleton className="flex size-30 items-center justify-center rounded-full ring-4 ring-secondary/20">
            <ImageIcon className="size-10 text-background" />
          </Skeleton>

          <div className="flex w-full flex-grow flex-col items-center justify-between gap-2">
            <Skeleton className="h-7 w-full rounded-full" />
            <Skeleton className="h-6.5 w-full rounded-full" />
            <Skeleton className="h-9 w-46 rounded-md" />
          </div>
        </div>
      ))}
    </div>
  )
}
