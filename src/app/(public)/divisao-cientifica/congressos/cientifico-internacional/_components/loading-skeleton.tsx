'use client'

import { Card, CardContent, CardHeader } from '@components/ui/card'
import { Separator } from '@components/ui/separator'
import { Skeleton } from '@components/ui/skeleton'

const SKELETON_COUNT = 6

export function LoadingSkeleton() {
  return (
    <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
      {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
        <Card key={index} className="flex flex-col">
          <CardHeader className="border-border border-b p-6">
            <div className="flex items-start justify-between gap-2">
              <Skeleton className="h-7 w-full rounded-md" />
              <Skeleton className="h-6 w-20 shrink-0 rounded-full" />
            </div>
            <Skeleton className="mt-2 h-5 w-3/4 rounded-md" />
          </CardHeader>

          <CardContent className="flex flex-col gap-2 px-6">
            <div className="p-2.5">
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-24 rounded-md" />
                <Skeleton className="size-4 rounded-full" />
              </div>
            </div>

            <Separator />

            <div className="space-y-4 p-4">
              <div className="flex items-center gap-2">
                <Skeleton className="size-5 rounded-sm" />
                <Skeleton className="h-4 w-32 rounded-md" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="size-5 rounded-sm" />
                <Skeleton className="h-4 w-40 rounded-md" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="size-5 rounded-sm" />
                <Skeleton className="h-4 w-24 rounded-md" />
              </div>
            </div>

            <Separator />

            <div className="space-y-2 p-4">
              <Skeleton className="h-4 w-32 rounded-md" />
              <div className="space-y-2">
                <Skeleton className="h-9 w-full rounded-md" />
                <Skeleton className="h-9 w-full rounded-md" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
