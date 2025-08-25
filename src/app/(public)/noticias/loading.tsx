import { Card } from '@components/ui/card'
import { Skeleton } from '@components/ui/skeleton'
import { ImageIcon } from 'lucide-react'

export default function Loading() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-12.5 p-5 py-14">
      <Skeleton className="h-12 w-41.5 rounded-full" />
      <Skeleton className="h-9 w-full rounded-md sm:w-54" />
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index: number) => (
          <Card
            className="flex h-fit w-full flex-col gap-4 rounded-md bg-background py-0 shadow-md"
            key={index}
          >
            <Skeleton className="flex h-60 w-full items-center justify-center rounded-t-md rounded-b-none">
              <ImageIcon className="text-background" />
            </Skeleton>
            <div className="flex w-full grow flex-col justify-between gap-4 p-4">
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-52.5 rounded-full" />
              </div>
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-4.5 w-full rounded-full" />
                  <Skeleton className="h-4.5 w-2/3 rounded-full" />
                </div>
                <div className="mt-5 flex flex-col gap-2">
                  <Skeleton className="h-3.5 w-full rounded-full" />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <Skeleton className="size-6 rounded-full" />
                <Skeleton className="h-4.5 w-20 rounded-full" />
              </div>
            </div>
          </Card>
        ))}
      </div>
      {/* <div className="mx-auto flex h-9 w-73 items-center justify-between gap-2">
        {Array.from({ length: 7 }).map((_, index: number) => (
          <div key={index} className="h-9 w-10 rounded-md " />
        ))}
      </div> */}
    </main>
  )
}
