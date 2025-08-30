import { Card, CardContent } from '@components/ui/card'
import { Skeleton } from '@components/ui/skeleton'

const ARRAY_SIZE = 6

export function LoadingSkeleton() {
  return (
    <div className="mt-4 grid w-full gap-6 sm:grid-cols-2 md:grid-cols-3">
      {[...new Array(ARRAY_SIZE)].map((_, index) => (
        <Card key={index}>
          <div className="-top-6 pointer-events-none absolute right-4 select-none text-primary opacity-20 dark:text-primary">
            <Skeleton className="size-20 rounded-full" />
          </div>
          <CardContent className="flex flex-grow flex-col justify-between gap-3 px-4 pt-8 pb-4">
            <div className="flex items-center gap-3">
              <Skeleton className="size-10 rounded-full" />
              <span className="flex items-center gap-2 font-bold text-foreground text-lg dark:text-white">
                <Skeleton className="h-6 w-32 rounded-full" />
              </span>
            </div>
            <span className="font-semibold text-primary text-xs uppercase tracking-wide">
              <Skeleton className="h-4 w-24 rounded-full" />
            </span>
            <div className="flex flex-col gap-1 text-muted-foreground text-sm dark:text-white">
              <Skeleton className="h-4 w-full rounded-full" />
              <Skeleton className="h-4 w-full rounded-full" />
              <Skeleton className="h-4 w-full rounded-full" />
              <Skeleton className="h-4 w-full rounded-full" />
              <Skeleton className="h-4 w-full rounded-full" />
              <Skeleton className="h-4 w-full rounded-full" />
              <Skeleton className="h-4 w-full rounded-full" />
              <Skeleton className="h-4 w-3/4 rounded-full" />
            </div>
            <div className="mt-2 flex flex-wrap gap-3">
              <Skeleton className="h-6 w-24 rounded" />
              <Skeleton className="h-6 w-16 rounded" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
