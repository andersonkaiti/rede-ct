import { Skeleton } from '@components/ui/skeleton'
import { ImageIcon } from 'lucide-react'

const ARRAY_SIZE = 6

export function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {[...new Array(ARRAY_SIZE)].map((_, index: number) => (
        <div className="flex flex-col gap-2" key={index}>
          <header className="h-80">
            <div className="relative flex size-full">
              <Skeleton className="absolute inset-0 flex size-full items-center justify-center rounded-md object-cover">
                <ImageIcon className="text-muted-foreground" />
              </Skeleton>
            </div>
          </header>

          <div className="flex h-fit grow flex-col gap-4 py-2">
            <div className="space-y-4">
              <Skeleton className="h-6 w-3/4 rounded-md" />

              <div className="flex flex-wrap gap-2">
                <Skeleton className="h-6 w-32 rounded-full" />
                <Skeleton className="h-6 w-24 rounded-full" />
              </div>
            </div>

            <footer className="mt-4">
              <Skeleton className="h-9 w-full rounded-md" />
            </footer>
          </div>
        </div>
      ))}
    </div>
  )
}
