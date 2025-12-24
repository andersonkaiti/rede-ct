import { Skeleton } from '@components/ui/skeleton'
import {
  PageContainer,
  PageHeader,
  PageMain,
} from '../../../_components/page-container'

export default function Loading() {
  return (
    <PageContainer>
      <Skeleton className="h-9 w-23.5" />

      <PageHeader className="flex-col items-start gap-8">
        <Skeleton className="h-14 w-full rounded-full" />

        <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <time className="text-muted-foreground text-sm">
            <Skeleton className="h-4 w-66 rounded-full" />
          </time>

          <Skeleton className="h-10 w-40 rounded-md" />
        </div>
      </PageHeader>

      <PageMain className="gap-10">
        <div className="relative h-88 w-full overflow-hidden">
          <Skeleton className="h-full w-full rounded-md" />
        </div>

        <section className="space-y-10">
          <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
            <div className="space-y-1">
              <Skeleton className="h-6 w-40 rounded-full" />
              <Skeleton className="h-6 w-96 rounded-full" />
            </div>

            <div className="space-y-1">
              <Skeleton className="h-6 w-36 rounded-full" />
              <Skeleton className="h-6 w-96 rounded-full" />
            </div>

            <div className="space-y-1">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-72 rounded-full" />
            </div>
          </div>

          <section className="space-y-1.5">
            <Skeleton className="h-6 w-full rounded-full" />
            <Skeleton className="h-6 w-full rounded-full" />
            <Skeleton className="h-6 w-2/3 rounded-full" />
          </section>

          <Skeleton className="h-9 w-full rounded-md" />
        </section>
      </PageMain>
    </PageContainer>
  )
}
