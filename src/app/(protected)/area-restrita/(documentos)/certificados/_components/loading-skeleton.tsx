import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import { Skeleton } from '@components/ui/skeleton'

const ARRAY_SIZE = 6

export function LoadingSkeleton() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {[...new Array(ARRAY_SIZE)].map((_, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="flex flex-row items-center justify-between gap-3 font-semibold">
              <span className="flex gap-4">
                <Skeleton className="size-5 rounded-full" />

                <div className="flex flex-col gap-1">
                  <Skeleton className="h-4 w-18 rounded-full" />
                  <Skeleton className="h-3 w-39.5 rounded-full" />
                </div>
              </span>
              <Skeleton className="size-4 rounded" />
            </CardTitle>
          </CardHeader>

          <CardContent className="my-2 flex h-full flex-col gap-1">
            <Skeleton className="h-3 w-full rounded-full" />
            <Skeleton className="h-3 w-3/4 rounded-full" />
          </CardContent>

          <CardFooter>
            <Skeleton className="h-9 w-full rounded-md" />
          </CardFooter>
        </Card>
      ))}
    </section>
  )
}
