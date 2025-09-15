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
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {[...new Array(ARRAY_SIZE)].map((_, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="flex flex-row items-center justify-between gap-3 font-semibold">
              <div className="flex flex-1 gap-4">
                <Skeleton className="size-5 rounded-full" />

                <div className="flex w-full items-center justify-between gap-4">
                  <Skeleton className="h-4 w-24 rounded-full" />
                </div>

                <Skeleton className="h-5.5 w-11 rounded-full" />
              </div>
            </CardTitle>
          </CardHeader>

          <CardContent className="flex h-full flex-col gap-4">
            <div className="line-clamp-2 text-justify">
              <Skeleton className="mb-1 h-3 w-full rounded-full" />
              <Skeleton className="h-3 w-3/4 rounded-full" />
            </div>
            <div className="text-muted-foreground text-xs">
              <Skeleton className="h-3 w-24 rounded-full" />
            </div>
          </CardContent>

          <CardFooter>
            <Skeleton className="h-9 w-full rounded-md" />
          </CardFooter>
        </Card>
      ))}
    </section>
  )
}
