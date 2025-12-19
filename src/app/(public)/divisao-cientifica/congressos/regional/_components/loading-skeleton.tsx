import { Card, CardContent, CardFooter, CardHeader } from '@components/ui/card'
import { Skeleton } from '@components/ui/skeleton'

const SKELETON_COUNT = 6

export function LoadingSkeleton() {
  return (
    <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
      {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
        <Card key={index}>
          <CardHeader className="space-y-3">
            <div className="flex items-start justify-between gap-2">
              <Skeleton className="h-7 w-full rounded-md" />
              <Skeleton className="h-6 w-20 shrink-0 rounded-full" />
            </div>
            <Skeleton className="h-5 w-3/4 rounded-md" />
          </CardHeader>

          <CardContent className="space-y-3">
            <div className="flex items-center gap-1">
              <Skeleton className="size-4 rounded-sm" />
              <Skeleton className="h-4 w-24 rounded-md" />
            </div>

            <div className="flex items-center gap-1">
              <Skeleton className="size-4 rounded-sm" />
              <Skeleton className="h-4 w-32 rounded-md" />
            </div>

            <div className="flex items-center gap-1">
              <Skeleton className="size-4 rounded-sm" />
              <Skeleton className="h-4 w-28 rounded-md" />
            </div>

            <div className="flex items-center gap-1">
              <Skeleton className="size-4 rounded-sm" />
              <Skeleton className="h-4 w-36 rounded-md" />
            </div>
          </CardContent>

          <CardFooter>
            <Skeleton className="h-10 w-full rounded-md" />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
