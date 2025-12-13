import { Avatar } from '@components/ui/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import { Separator } from '@components/ui/separator'
import { Skeleton } from '@components/ui/skeleton'

const SKELETON_COUNT = 7

export function LoadingSkeleton() {
  return (
    <section className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
        <Card className="flex h-full flex-col overflow-hidden" key={index}>
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar className="h-16 w-16 shrink-0 border">
              <Skeleton className="size-full rounded-full" />
            </Avatar>
            <div className="flex-1">
              <CardTitle className="mb-1 line-clamp-2">
                <Skeleton className="h-4 w-32 rounded" />
              </CardTitle>
              <CardDescription className="text-xs capitalize">
                <Skeleton className="h-3 w-16 rounded" />
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="flex-1">
            <Skeleton className="h-9 w-full rounded-md" />
          </CardContent>

          <Separator />

          <CardFooter className="flex items-end justify-between gap-2 px-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-20 rounded" />
              <Skeleton className="h-5 w-16 rounded" />
            </div>

            <Skeleton className="h-8 w-35 rounded-md" />
          </CardFooter>
        </Card>
      ))}
    </section>
  )
}
