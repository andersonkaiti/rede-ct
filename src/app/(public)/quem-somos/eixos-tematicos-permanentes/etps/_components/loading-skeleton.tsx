import { Card, CardFooter, CardHeader } from '@components/ui/card'
import { Skeleton } from '@components/ui/skeleton'

export function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 9 }).map((_, index) => (
        <Card key={index}>
          <CardHeader className="space-y-3">
            <div className="flex items-start justify-between gap-2">
              <Skeleton className="h-7 w-2/3" />
              <Skeleton className="h-5 w-16 rounded-full" />
            </div>

            <Skeleton className="h-10 w-full" />
          </CardHeader>

          <CardFooter>
            <Skeleton className="h-10 w-full" />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
