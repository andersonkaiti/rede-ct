'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@components/ui/card'
import { Separator } from '@components/ui/separator'
import { Skeleton } from '@components/ui/skeleton'

const SKELETON_COUNT = 6

export function ListLoadingSkeleton() {
  return (
    <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
      {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
        <Card key={index} className="flex flex-col">
          <CardHeader>
            <Skeleton className="h-7 w-3/4 rounded-md" />

            <div className="mt-4 flex flex-wrap gap-2">
              <Skeleton className="h-6 w-24 rounded-full" />
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>
          </CardHeader>

          <CardContent className="flex flex-col gap-2">
            <Skeleton className="h-5 w-48 rounded-full" />
            <Skeleton className="h-5 w-32 rounded-full" />
          </CardContent>

          <CardFooter className="mt-auto">
            <Skeleton className="h-10 w-full rounded-md" />
          </CardFooter>
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
