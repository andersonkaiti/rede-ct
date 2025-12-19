import { Skeleton } from '@components/ui/skeleton'
import { PageContainer, PageMain } from '../../../_components/page-container'

export default function Loading() {
  return (
    <PageContainer>
      <Skeleton className="h-9 w-23.5" />

      <PageMain className="flex flex-col items-center gap-8 md:flex-row">
        <Skeleton className="size-30 shrink-0 rounded-full shadow-lg sm:size-50" />

        <div className="w-full space-y-8">
          <div className="space-y-1">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/4" />
          </div>

          <Skeleton className="h-5 w-1/3" />

          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          <Skeleton className="h-9 w-full" />
        </div>
      </PageMain>
    </PageContainer>
  )
}
