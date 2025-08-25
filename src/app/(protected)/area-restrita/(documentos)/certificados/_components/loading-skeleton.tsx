import { Skeleton } from '@components/ui/skeleton'

const ARRAY_SIZE = 6

export function LoadingSkeleton() {
  return (
    <section className="grid w-full grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-3">
      {[...new Array(ARRAY_SIZE)].map((_, index: number) => (
        <div
          className="h-fit w-full space-y-4 rounded-sm p-10 shadow-sm"
          key={index}
        >
          <Skeleton className="h-8 w-30 rounded-md" />
          <Skeleton className="h-6.5 w-full rounded-md" />
          <Skeleton className="h-6 w-26 rounded-md" />
          <Skeleton className="h-9 max-w-40 rounded-md" />
        </div>
      ))}
    </section>
  )
}
