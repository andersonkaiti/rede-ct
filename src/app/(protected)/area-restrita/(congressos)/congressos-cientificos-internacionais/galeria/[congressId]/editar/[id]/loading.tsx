import { PageContainer, PageHeaderContent } from '@components/ui/page-container'
import { Separator } from '@components/ui/separator'
import { Skeleton } from '@components/ui/skeleton'

export default function Loading() {
  return (
    <PageContainer>
      <PageHeaderContent>
        <Skeleton className="h-9 w-2/4" />
        <Skeleton className="h-5 w-1/4" />
      </PageHeaderContent>

      <div className="space-y-8">
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-79.5 w-full rounded-xl" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-29.5 w-full" />
        </div>
      </div>

      <Separator />

      <Skeleton className="h-9 w-full" />
    </PageContainer>
  )
}
