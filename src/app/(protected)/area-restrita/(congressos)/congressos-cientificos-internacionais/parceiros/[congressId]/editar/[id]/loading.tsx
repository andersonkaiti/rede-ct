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

      <form className="space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-9 w-full rounded-md" />
        </div>

        <Separator />

        <div className="space-y-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-79.5 w-full rounded-xl" />
        </div>

        <Separator />

        <Skeleton className="h-9 w-full rounded-md" />
      </form>
    </PageContainer>
  )
}
