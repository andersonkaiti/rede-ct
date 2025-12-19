'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@components/ui/card'
import { Skeleton } from '@components/ui/skeleton'

const SKELETON_COUNT = 6

export function LoadingSkeleton() {
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
