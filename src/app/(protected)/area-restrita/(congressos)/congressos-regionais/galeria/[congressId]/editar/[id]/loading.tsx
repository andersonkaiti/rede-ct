import { PageContainer, PageHeaderContent } from '@components/ui/page-container'
import { Skeleton } from '@components/ui/skeleton'

export default function Loading() {
  return (
    <PageContainer>
      <PageHeaderContent>
        <Skeleton className="h-9 w-2/4" />
        <Skeleton className="h-5 w-1/4" />
      </PageHeaderContent>

      <form className="space-y-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-3 w-32" />
            <Skeleton className="h-64 w-full rounded-md" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-24 w-full rounded-md" />
          </div>
        </div>

        <Skeleton className="h-px w-full" />

        <Skeleton className="h-9 w-full rounded-md" />
      </form>
    </PageContainer>
  )
}
