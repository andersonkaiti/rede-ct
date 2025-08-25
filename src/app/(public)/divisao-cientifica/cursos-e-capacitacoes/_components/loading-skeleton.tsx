import { Skeleton } from '@components/ui/skeleton'
import { ImageIcon } from 'lucide-react'

const ARRAY_SIZE = 6

export function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2">
      {[...new Array(ARRAY_SIZE)].map((_, index) => (
        <div className="flex flex-col gap-2" key={index}>
          <header className="h-80">
            <Skeleton className="flex size-full items-center justify-center rounded-md">
              <ImageIcon className="text-muted-foreground/40" />
            </Skeleton>
          </header>

          <div className="flex h-fit flex-grow flex-col justify-between gap-4 py-2">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm leading-4">
                <Skeleton className="h-4 w-32 rounded-full" />
              </div>
              <Skeleton className="h-8 w-2/3 rounded-md" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Skeleton className="h-5 w-20 rounded-full" />
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Skeleton className="size-4 rounded-full" />
                <Skeleton className="h-4 w-32 rounded-full" />
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Skeleton className="size-4 rounded-full" />
                <Skeleton className="h-4 w-12 rounded-full" />
              </div>
            </div>

            <footer>
              <Skeleton className="flex h-9 w-full items-center justify-center rounded-md" />
            </footer>
          </div>
        </div>
      ))}
    </div>
  )
}
