import { Skeleton } from '@components/ui/skeleton'

const SKELETON_COUNT = 7

export function LoadingSkeleton() {
  return (
    <section className="grid w-full grid-cols-1 gap-2">
      {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
        <div
          className="rounded-lg border border-muted/30 bg-background shadow-sm"
          key={index}
        >
          <div className="flex h-12 w-full items-center justify-between gap-2 p-2">
            <Skeleton className="h-3 w-48 rounded-full" />
            <Skeleton className="size-5" />
          </div>
        </div>
      ))}
    </section>
  )
}
