import { Skeleton } from '@components/ui/skeleton'
import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '../../../_components/page-container'
import { LoadingSkeleton } from './_components/table/loading-skeleton'

export default function Loading() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Contas Correntes</PageTitle>
          <PageDescription>
            Gerencie as contas correntes da organização
          </PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <Skeleton className="h-9 w-19.5" />

          <Skeleton className="size-9" />
        </PageActionsContainer>

        <Skeleton className="h-10 w-full lg:w-40" />
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
