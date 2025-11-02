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

const SKELETON_COUNT = 9

export default function Loading() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>
            <Skeleton className="h-9 w-28.5" />
          </PageTitle>
          <PageDescription>
            <Skeleton className="h-5 w-38" />
          </PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <Skeleton className="h-9 w-full lg:w-52" />

          <Skeleton className="h-9 w-21" />

          <Skeleton className="h-9 w-10" />
        </PageActionsContainer>

        <Skeleton className="h-9 w-36" />
      </PageHeader>

      <PageMain>
        <div className="w-full rounded-md border [&_div:last-child]:border-0 [&_div]:border-b">
          <div className="flex h-[40px] gap-4 px-2 py-3">
            <Skeleton className="h-full flex-4 rounded-md" />
            <Skeleton className="h-full flex-3 rounded-md" />
            <Skeleton className="h-full flex-1 rounded-md" />
          </div>
          {Array.from({ length: SKELETON_COUNT }).map((_, index: number) => (
            <div
              className="flex h-[52.8px] items-center gap-4 px-2 py-3"
              key={index}
            >
              <Skeleton className="h-2/3 flex-4 rounded-md" />
              <Skeleton className="h-2/3 flex-3 rounded-md" />
              <Skeleton className="h-2/3 flex-1 rounded-md" />
            </div>
          ))}
        </div>

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
