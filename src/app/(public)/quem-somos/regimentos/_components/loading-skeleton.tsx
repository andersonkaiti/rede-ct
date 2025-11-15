'use client'

import { Card } from '@components/ui/card'
import { Skeleton } from '@components/ui/skeleton'

const SKELETON_COUNT = 6

export function LoadingSkeleton() {
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
