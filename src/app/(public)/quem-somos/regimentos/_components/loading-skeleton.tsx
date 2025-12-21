'use client'

import { Card } from '@components/ui/card'
import { Separator } from '@components/ui/separator'
import { Skeleton } from '@components/ui/skeleton'

const SKELETON_COUNT = 6

export function ListLoadingSkeleton() {
  return (
    <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
      {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
        <Card
          key={index}
          className="relative animate-pulse rounded-lg border bg-background p-6 transition-all duration-300"
        >
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
            <div className="flex min-w-0 flex-1 items-start gap-3">
              <Skeleton className="mt-1 size-10 rounded-lg" />

              <div className="min-w-0 flex-1">
                <Skeleton className="h-5 w-3/4 rounded-md" />
                <Skeleton className="mt-1.5 h-4 w-1/3 rounded-md" />
              </div>
            </div>

            <div className="flex flex-col gap-1 sm:items-end">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-3 w-32 rounded-md" />
            </div>
          </div>

          <div className="mt-5.5 grid grid-cols-1 gap-4 border-border border-t pt-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <Skeleton className="h-4 w-28 rounded-md" />
              <Skeleton className="h-5 w-36 rounded-md" />
            </div>

            <div className="flex flex-col gap-1.5">
              <Skeleton className="h-4 w-32 rounded-md" />
              <Skeleton className="h-5 w-36 rounded-md" />
            </div>
          </div>

          <Skeleton className="h-8 w-full rounded-md" />
        </Card>
      ))}
    </div>
  )
}

export function LoadingSkeleton() {
  return (
    <>
      <div className="flex w-full gap-2 sm:flex-row sm:items-center sm:gap-4">
        <div className="flex w-full gap-2 sm:w-fit">
          <Skeleton className="h-9 w-52" />
          <Skeleton className="h-9 w-10" />
        </div>

        <div className="flex w-full gap-2 sm:w-fit">
          <Skeleton className="h-9 w-21" />
        </div>
      </div>

      <ListLoadingSkeleton />

      <Separator />

      <div className="flex items-center justify-between">
        <Skeleton className="h-9 w-52" />
        <div className="flex items-center gap-2">
          <Skeleton className="size-9" />
          <Skeleton className="size-9" />
          <Skeleton className="size-9" />
        </div>
      </div>
    </>
  )
}
