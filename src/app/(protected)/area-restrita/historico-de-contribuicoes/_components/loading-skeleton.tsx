import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import { Skeleton } from '@components/ui/skeleton'

const SKELETON_COUNT = 4

export function LoadingSkeleton() {
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 xlg:grid-cols-3">
      {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="flex flex-row items-center justify-between gap-3 font-semibold">
              <Skeleton className="h-9 w-28 rounded-full" />

              <Skeleton className="size-4 rounded-md" />
            </CardTitle>
          </CardHeader>

          <CardContent>
            <CardDescription className="space-y-2">
              <Skeleton className="h-4 w-full rounded-full" />
              <Skeleton className="h-4 w-1/2 rounded-full" />
            </CardDescription>
          </CardContent>

          <CardFooter className="mt-auto flex flex-row items-center justify-between border-accent border-t">
            <Skeleton className="h-4 w-20 rounded-full" />

            <Skeleton className="h-8 w-24 rounded-md" />
          </CardFooter>
        </Card>
      ))}
    </section>
  )
}
