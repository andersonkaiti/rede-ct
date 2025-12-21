import { Skeleton } from '@components/ui/skeleton'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@/app/(protected)/_components/page-container'

export default function Loading() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Equipes</PageTitle>
          <PageDescription>Gerencie as equipes</PageDescription>
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
        <div className="space-y-4">
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
        </div>

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
