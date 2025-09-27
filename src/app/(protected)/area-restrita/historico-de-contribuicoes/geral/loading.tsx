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

const ARRAY_SIZE = 6

export default function Loading() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>
            <Skeleton className="h-9 w-80" />
          </PageTitle>
          <PageDescription>
            <Skeleton className="h-5 w-68" />
          </PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <Skeleton className="h-9 w-full lg:w-52" />

          <Skeleton className="h-9 w-10" />
        </PageActionsContainer>

        <Skeleton className="h-9 w-full lg:w-48" />
      </PageHeader>

      <PageMain>
        <LoadingSkeleton />
      </PageMain>
    </PageContainer>
  )
}
