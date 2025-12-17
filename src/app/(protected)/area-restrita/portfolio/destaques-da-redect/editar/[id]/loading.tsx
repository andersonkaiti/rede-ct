import {
  PageContainer,
  PageHeader,
  PageHeaderContent,
} from '@components/ui/page-container'
import { Skeleton } from '@components/ui/skeleton'

export default function Loading() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <Skeleton className="h-9 w-2/4" />
          <Skeleton className="h-5 w-1/4" />
        </PageHeaderContent>
      </PageHeader>

      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Skeleton className="h-4 w-16 rounded-md" />
            <Skeleton className="h-9 w-full rounded-md" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-16 rounded-md" />
            <Skeleton className="h-9 w-full rounded-md" />
          </div>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-32 rounded-md" />
          <Skeleton className="h-9 w-full rounded-md" />
        </div>

        <div className="flex flex-row items-start space-x-2">
          <Skeleton className="size-5 rounded" />

          <div className="flex flex-col gap-1">
            <Skeleton className="h-4 w-28 rounded-md" />
            <Skeleton className="h-3 w-80 rounded-md" />
          </div>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-24 rounded-md" />
          <Skeleton className="h-9 w-full rounded-md" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-16 rounded-md" />
          <Skeleton className="h-79.5 w-full rounded-xl" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-20 rounded-md" />
          <Skeleton className="h-16 w-full rounded-md" />
        </div>

        <Skeleton className="h-9 w-full rounded-md" />
      </div>
    </PageContainer>
  )
}
