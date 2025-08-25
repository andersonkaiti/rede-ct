import { Skeleton } from '@components/ui/skeleton'

export default function Loading() {
  return (
    <main className="mx-auto my-10 flex w-full max-w-5xl flex-col justify-center gap-7 p-5 py-8">
      <header className="space-y-8">
        <Skeleton className="mt-2 h-10 w-full rounded-full" />

        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <time className="flex items-center gap-x-1">
              <Skeleton className="h-4 w-66 rounded-full" />
            </time>

            <Skeleton className="h-4 w-30 rounded-full" />
          </div>

          <Skeleton className="h-9 w-full rounded-md sm:w-32.5" />
        </div>
      </header>

      <picture className="h-88 w-full">
        <Skeleton className="h-full w-full rounded-md" />
      </picture>

      <div className="space-y-4">
        <Skeleton className="h-5 w-full rounded-full" />
        <Skeleton className="h-5 w-2/3 rounded-full" />
      </div>
    </main>
  )
}
