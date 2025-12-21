import { Skeleton } from '@components/ui/skeleton'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '../../../../_components/page-container'
import { LoadingSkeleton } from './_components/table/loading-skeleton'

export default function Loading() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle className="w-full">
            <Skeleton className="h-9 w-2/4" />
          </PageTitle>
          <PageDescription className="w-full">
            <Skeleton className="h-5 w-1/4" />
          </PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <div className="flex w-full items-center gap-2">
          <Skeleton className="h-9 w-full lg:w-51" />

          <Skeleton className="h-9 w-20.5" />

          <Skeleton className="size-9" />
        </div>

        <Skeleton className="h-9 w-full lg:w-36.5" />
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
