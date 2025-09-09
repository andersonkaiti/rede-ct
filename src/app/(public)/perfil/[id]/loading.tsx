import { Separator } from '@components/ui/separator'
import { Skeleton } from '@components/ui/skeleton'

export default function Loading() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <Skeleton className="h-9 w-23.5" />

      <div className="space-y-14">
        <h1 className="flex items-center gap-2 font-bold text-3xl">
          <Skeleton className="h-9 w-60" />
        </h1>
        <Separator />
      </div>

      <div className="flex flex-col items-center gap-8 md:flex-row">
        <Skeleton className="size-30 rounded-full shadow-lg sm:size-50" />

        <div className="flex h-full w-full flex-1 flex-col gap-4 md:flex-row md:items-center md:gap-8">
          <div className="flex flex-1 flex-col gap-10">
            <div className="flex flex-col items-center gap-3 md:items-start">
              <Skeleton className="h-6 w-40 rounded-full" />
              <Skeleton className="h-3 w-24 rounded-full" />
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Skeleton className="size-4 rounded-full" />
                <Skeleton className="h-4 w-32" />
              </div>

              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Skeleton className="size-4 rounded-full" />
                <Skeleton className="h-4 w-28" />
              </div>

              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Skeleton className="size-4 rounded-full" />

                <span className="flex items-center gap-1">
                  <Skeleton className="h-4 w-10 rounded" />
                  <Skeleton className="h-4 w-36" />
                </span>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Skeleton className="size-4 rounded-full" />

                <span className="flex items-center gap-1">
                  <Skeleton className="h-4 w-9 rounded" />
                  <Skeleton className="h-4 w-36" />
                </span>
              </div>
            </div>
          </div>

          <div className="flex h-full justify-between gap-4 sm:flex-col">
            <div className="flex items-center text-sm">
              <Skeleton className="mr-2 h-5 w-5 rounded-full" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-17" />
                <Skeleton className="h-3 w-30.5" />
              </div>
            </div>

            <div className="flex items-center sm:hidden">
              <Separator className="h-8" orientation="vertical" />
            </div>

            <div className="flex items-center text-sm">
              <Skeleton className="mr-2 h-5 w-5 rounded-full" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-30.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
