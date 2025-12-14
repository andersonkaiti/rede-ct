import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@components/ui/page-container'
import { Skeleton } from '@components/ui/skeleton'
import { LoadingSkeleton } from '../_components/loading-skeleton'

export default function Loading() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>
            <Skeleton className="h-9 w-86" />
          </PageTitle>
          <PageDescription>
            <Skeleton className="h-4 w-65.5" />
          </PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <Skeleton className="h-9 w-full lg:w-51" />

          <Skeleton className="size-9" />
        </PageActionsContainer>

        <div className="flex w-full flex-col gap-2 md:flex-row lg:w-fit">
          <Skeleton className="h-9 w-48" />
          <Skeleton className="h-9 w-48" />
        </div>
      </PageHeader>

      <PageMain>
        <LoadingSkeleton />

        <div className="mt-4 flex items-center justify-between">
          <Skeleton className="h-9 w-52" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-9 w-9" />
            <Skeleton className="h-9 w-9" />
            <Skeleton className="h-9 w-9" />
          </div>
        </div>
      </PageMain>
    </PageContainer>
  )
}
