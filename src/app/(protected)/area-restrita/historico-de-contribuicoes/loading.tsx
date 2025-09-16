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
import { LoadingSkeleton as CardsLoadingSkeleton } from './_components/loading-skeleton'

export default function Loading() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle className="hidden lg:flex">
            <Skeleton className="h-9 w-93.5" />
          </PageTitle>

          <PageTitle className="flex flex-col gap-1 lg:hidden">
            <Skeleton className="h-9 w-43" />
            <Skeleton className="h-9 w-48" />
          </PageTitle>
          <PageDescription>
            <Skeleton className="h-5 w-73.5" />
          </PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <Skeleton className="h-9 w-full lg:w-52" />

          <Skeleton className="h-9 w-10" />
        </PageActionsContainer>

        <Skeleton className="h-9 w-full lg:w-60" />
      </PageHeader>

      <PageMain>
        <CardsLoadingSkeleton />
      </PageMain>
    </PageContainer>
  )
}
