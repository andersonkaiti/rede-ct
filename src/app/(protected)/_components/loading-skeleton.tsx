import { Separator } from '@components/ui/separator'
import { Skeleton } from '@components/ui/skeleton'

export function LoadingSkeleton() {
  return (
    <div className="flex h-screen w-full">
      <div className="hidden flex-col border-r bg-background/40 md:flex md:w-76">
        <div className="flex items-center gap-3 p-4">
          <Skeleton className="size-8 shrink-0 rounded-full" />
          <div className="flex w-full justify-between gap-2">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="size-4" />
          </div>
        </div>

        <Separator />

        <div className="space-y-3 p-4">
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-5/6" />
          <Skeleton className="h-9 w-4/6" />
          <Skeleton className="h-9 w-3/6" />
        </div>

        <div className="mt-auto">
          <Separator />
        </div>

        <div className="flex h-13 items-center gap-4 px-6 py-4">
          <Skeleton className="size-4" />
          <Skeleton className="h-4 w-14" />
        </div>
      </div>

      <div className="flex w-full flex-col">
        <div className="flex h-16 items-center justify-between p-4">
          <Skeleton className="size-7" />
          <Skeleton className="size-7 rounded-full" />
        </div>

        <div className="mx-auto flex h-full w-full flex-col gap-2 p-4 py-10 md:gap-8">
          <div className="space-y-2">
            <Skeleton className="h-9 w-80" />
            <Skeleton className="h-5 w-full rounded-full" />
          </div>

          <div className="flex flex-col gap-2">
            <Skeleton className="h-23.5 w-full" />
            <Skeleton className="h-23.5 w-full" />
            <Skeleton className="h-23.5 w-full" />
            <Skeleton className="h-23.5 w-full" />
            <Skeleton className="h-23.5 w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
