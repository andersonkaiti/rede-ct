import { Skeleton } from '@components/ui/skeleton'
import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@/app/(protected)/_components/page-container'
import { LoadingSkeleton } from '../_components/loading-skeleton'

export default function Loading() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>
            <Skeleton className="h-9 w-83" />
          </PageTitle>
          <PageDescription>
            <Skeleton className="h-5 w-64.5" />
          </PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <Skeleton className="h-9 w-full lg:w-51" />

          <Skeleton className="size-9" />
        </PageActionsContainer>

        <div className="flex w-full flex-col gap-2 lg:w-fit lg:flex-row">
          <Skeleton className="h-9 w-48" />
          <Skeleton className="h-9 w-48" />
        </div>
      </PageHeader>

      <PageMain>
        <LoadingSkeleton />

        <div className="mt-4 flex items-center justify-between">
          <Skeleton className="h-9 w-52" />
          <div className="flex items-center gap-2">
            <Skeleton className="size-9" />
            <Skeleton className="size-9" />
            <Skeleton className="size-9" />
          </div>
        </div>
      </PageMain>
    </PageContainer>
  )
}
