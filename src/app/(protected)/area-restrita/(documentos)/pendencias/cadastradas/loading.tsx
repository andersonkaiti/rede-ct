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

const ARRAY_SIZE = 6

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
          <Skeleton className="h-9 w-full lg:w-52" />

          <Skeleton className="h-9 w-10" />
        </PageActionsContainer>

        <div className="flex w-full flex-col gap-2 lg:w-fit lg:flex-row">
          <Skeleton className="h-9 w-48" />
          <Skeleton className="h-9 w-48" />
        </div>
      </PageHeader>

      <PageMain>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xlg:grid-cols-3">
          {Array.from({ length: ARRAY_SIZE }).map((_, i) => (
            <div className="rounded-md border p-4" key={i}>
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="flex flex-1 items-center gap-4">
                  <Skeleton className="size-5 rounded-full" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="h-5.5 w-17" />
              </div>
              <div className="mb-3">
                <Skeleton className="mb-1 h-3 w-full" />
                <Skeleton className="h-3 w-3/4" />
              </div>
              <Skeleton className="h-9 w-full" />
            </div>
          ))}
        </div>
      </PageMain>
    </PageContainer>
  )
}
