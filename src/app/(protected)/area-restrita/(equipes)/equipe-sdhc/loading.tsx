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
import { LoadingSkeleton as TableLoadingSkeleton } from './_components/_table/loading-skeleton'

export default function Loading() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>
            <Skeleton className="h-9 w-46" />
          </PageTitle>
          <PageDescription>
            <Skeleton className="h-5 w-37.5" />
          </PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <Skeleton className="h-9 w-52 max-w-sm" />

          <Skeleton className="h-9 w-21" />
        </PageActionsContainer>

        <Skeleton className="h-9 w-40" />
      </PageHeader>

      <PageMain>
        <TableLoadingSkeleton />
      </PageMain>
    </PageContainer>
  )
}
