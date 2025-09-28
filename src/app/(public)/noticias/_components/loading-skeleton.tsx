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
          <header className="h-60">
            <div className="relative flex size-full overflow-hidden rounded-lg border-1 border-background-900">
              <Skeleton className="flex size-full items-center justify-center">
                <ImageIcon className="text-muted-foreground" />
              </Skeleton>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent dark:from-black/50 dark:to-transparent" />
            </div>
          </header>

          <div className="flex h-fit flex-grow flex-col justify-between gap-4 py-8">
            <div className="space-y-2">
              <Skeleton className="h-6 w-full rounded-md" />
              <Skeleton className="h-6 w-4/5 rounded-md" />
              <Skeleton className="h-6 w-3/5 rounded-md" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-full rounded-full" />
              <Skeleton className="h-4 w-5/6 rounded-full" />
              <Skeleton className="h-4 w-4/5 rounded-full" />
            </div>
          </div>

          <footer className="flex w-full items-center gap-x-4">
            <div className="flex items-center gap-2">
              <Skeleton className="size-8 rounded-full" />
              <Skeleton className="h-4 w-20 rounded-full" />
            </div>

            <Skeleton className="h-4 w-px" />

            <div className="flex items-center gap-2">
              <Skeleton className="h-3 w-16 rounded-full" />
            </div>
          </footer>
        </div>
      ))}
    </div>
  )
}
