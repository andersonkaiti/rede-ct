import {
  PageContainer,
  PageHeader,
  PageMain,
} from '@components/ui/page-container'
import { Skeleton } from '@components/ui/skeleton'

export default function Loading() {
  return (
    <PageContainer>
      <PageHeader>
        <Skeleton className="h-9 w-2/4" />
      </PageHeader>
      <PageMain>
        <div className="space-y-6">
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-9 w-full" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-9 w-full" />
            <Skeleton className="h-32 w-full" />
          </div>

          <Skeleton className="h-9 w-full" />
        </div>
      </PageMain>
    </PageContainer>
  )
}
