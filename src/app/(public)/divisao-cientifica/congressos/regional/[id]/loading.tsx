import { Separator } from '@components/ui/separator'
import { Skeleton } from '@components/ui/skeleton'
import {
  PageContainer,
  PageHeader,
  PageMain,
} from '../../../../_components/page-container'

export default function Loading() {
  return (
    <PageContainer>
      <Skeleton className="h-9 w-24 rounded-md" />

      <PageHeader className="flex-col items-start">
        <Skeleton className="h-8 w-32 rounded-full" />

        <Skeleton className="mt-4 h-12 w-3/4 rounded-md" />
      </PageHeader>

      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
          <Skeleton className="h-5 w-48 rounded-md" />
          <Skeleton className="h-5 w-32 rounded-md" />
        </div>

        <Skeleton className="h-10 w-32 rounded-md" />
      </div>

      <Separator />

      <PageMain className="gap-8">
        <section className="my-4 space-y-8">
          <Skeleton className="h-8 w-32 rounded-md" />

          <div className="space-y-2">
            <Skeleton className="h-5 w-full rounded-md" />
            <Skeleton className="h-5 w-full rounded-md" />
            <Skeleton className="h-5 w-2/3 rounded-md" />
          </div>
        </section>

        <section className="my-4 space-y-8">
          <Skeleton className="h-8 w-64 rounded-md" />

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className="h-12.5 w-full rounded-xl" />
            ))}
          </div>
        </section>

        <section className="my-4 space-y-8">
          <Skeleton className="h-8 w-48 rounded-md" />

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="space-y-2">
                <Skeleton className="h-60 w-full rounded-md" />
                <div className="flex w-full items-center justify-between">
                  <Skeleton className="h-5 w-20 rounded-md" />
                  <Skeleton className="size-4 rounded-sm" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="my-4 space-y-8">
          <Skeleton className="h-8 w-48 rounded-md" />

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="space-y-2">
                <Skeleton className="h-60 w-full rounded-md" />
                <Skeleton className="h-5 w-32 rounded-md" />
              </div>
            ))}
          </div>
        </section>
      </PageMain>
    </PageContainer>
  )
}
