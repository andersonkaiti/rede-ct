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

        <time className="text-muted-foreground text-sm">
          <Skeleton className="h-4 w-66 rounded-full" />
        </time>
      </PageHeader>

      <PageMain className="gap-10">
        <div className="relative h-88 w-full overflow-hidden">
          <Skeleton className="h-full w-full rounded-md" />
        </div>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-1">
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-5 w-full rounded-full" />
          </div>

          <div className="space-y-1">
            <Skeleton className="h-6 w-40 rounded-full" />
            <Skeleton className="h-5 w-full rounded-full" />
          </div>
        </section>

        <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
          <div className="space-y-1">
            <Skeleton className="h-6 w-12 rounded-full" />
            <Skeleton className="h-4 w-32 rounded-full" />
          </div>
        </div>

        <div className="space-y-1">
          <Skeleton className="h-6 w-24 rounded-full" />
          <div className="space-y-1.5">
            <Skeleton className="h-5 w-full rounded-full" />
            <Skeleton className="h-5 w-full rounded-full" />
            <Skeleton className="h-5 w-2/3 rounded-full" />
          </div>
        </div>

        <Skeleton className="h-9 w-full rounded-md" />
      </PageMain>
    </PageContainer>
  )
}
