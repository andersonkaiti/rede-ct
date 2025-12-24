import { Separator } from '@components/ui/separator'
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

        <time className="flex items-center gap-x-1 text-muted-foreground text-sm">
          <Skeleton className="h-4 w-66 rounded-full" />
        </time>

        <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex gap-4">
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-6 w-24 rounded-full" />
          </div>

          <Skeleton className="h-10 w-40 rounded-md" />
        </div>

        <Separator />
      </PageHeader>

      <PageMain className="space-y-7">
        <div className="grid grid-cols-1 text-sm md:grid-cols-2">
          <div className="space-y-1">
            <Skeleton className="h-5 w-16 rounded-full" />
            <Skeleton className="h-5 w-48 rounded-full" />
          </div>

          <div className="space-y-1">
            <Skeleton className="h-5 w-16 rounded-full" />
            <Skeleton className="h-5 w-48 rounded-full" />
          </div>
        </div>

        <Skeleton className="h-9 w-38 rounded-md" />

        <div className="space-y-1 text-sm">
          <Skeleton className="h-5 w-20 rounded-full" />

          <div className="space-y-1.5">
            <Skeleton className="h-3 w-full rounded-full" />
            <Skeleton className="h-3 w-full rounded-full" />
            <Skeleton className="h-3 w-2/3 rounded-full" />
          </div>
        </div>

        <Skeleton className="h-9 w-full rounded-md" />
      </PageMain>
    </PageContainer>
  )
}
