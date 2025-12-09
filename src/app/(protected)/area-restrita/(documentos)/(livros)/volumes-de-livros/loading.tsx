import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@components/ui/page-container'
import { Skeleton } from '@components/ui/skeleton'
import { LoadingSkeleton } from './_components/table/loading-skeleton'

export default function Loading() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Volumes de Livros</PageTitle>
          <PageDescription>Gerencie os volumes de livros</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <div className="flex w-full items-center gap-2">
          <Skeleton className="h-9 w-full lg:w-51" />
          <Skeleton className="h-9 w-24" />
          <Skeleton className="size-9" />
        </div>

        <Skeleton className="h-9 w-full lg:w-44" />
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
