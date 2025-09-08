import { Skeleton } from '@components/ui/skeleton'
import { ImageIcon } from 'lucide-react'
import { parseAsInteger, useQueryState } from 'nuqs'

const DEFAULT_NEWS_LIMIT = 9

export default function LoadingSkeleton() {
  const [limit] = useQueryState(
    'limit',
    parseAsInteger.withDefault(DEFAULT_NEWS_LIMIT)
  )

  return (
    <div className="grid w-full grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: limit }).map((_, index: number) => (
        <div className="flex flex-col gap-2" key={index}>
          <div className="h-60 w-full overflow-hidden rounded-lg border-1 border-gray-200/20">
            <Skeleton className="flex size-full items-center justify-center">
              <ImageIcon className="text-muted-foreground" />
            </Skeleton>
          </div>
          <div className="flex flex-grow flex-col gap-4.5 pb-2">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-24 rounded-full" />
              </div>
              <Skeleton className="h-7 w-3/4 rounded-md" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-5 w-full rounded-full" />
            </div>
            <Skeleton className="h-px w-full" />
          </div>
          <div className="flex w-full items-center justify-between gap-x-2 pt-1">
            <div className="flex w-full items-center gap-x-2">
              <Skeleton className="size-8 rounded-full" />
              <Skeleton className="h-4.5 w-full rounded-full" />
            </div>
            <Skeleton className="size-4 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  )
}
