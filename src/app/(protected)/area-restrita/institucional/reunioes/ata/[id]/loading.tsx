import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card'
import {
  PageContainer,
  PageDescription,
  PageHeaderContent,
  PageTitle,
} from '@components/ui/page-container'
import { Separator } from '@components/ui/separator'
import { Skeleton } from '@components/ui/skeleton'

export default function Loading() {
  return (
    <PageContainer>
      <PageHeaderContent>
        <PageTitle className="w-full">
          <Skeleton className="h-9 w-2/4" />
        </PageTitle>
        <PageDescription className="w-full">
          <Skeleton className="h-4 w-1/4" />
        </PageDescription>
      </PageHeaderContent>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-6 w-48" />
            </CardTitle>

            <Skeleton className="h-4 w-80" />
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-3.5 w-40" />
              <Skeleton className="h-9 w-full" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-3.5 w-40" />
              <Skeleton className="h-9 w-full" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-5 w-40" />

              <div className="h-40 rounded-lg border-2 border-border border-dashed" />

              <Skeleton className="h-12.5 w-full" />
            </div>
          </CardContent>
        </Card>

        <Separator />

        <div className="space-y-2">
          <Skeleton className="h-9 w-full" />

          <Skeleton className="h-9 w-full" />
        </div>
      </div>
    </PageContainer>
  )
}
