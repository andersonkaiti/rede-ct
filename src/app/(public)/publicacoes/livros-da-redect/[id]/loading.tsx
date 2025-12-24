import { Separator } from '@components/ui/separator'
import { Skeleton } from '@components/ui/skeleton'
import {
  PageContainer,
  PageHeader,
  PageMain,
} from '../../../_components/page-container'

export default function Loading() {
  return (
    <PageContainer>
      <Skeleton className="h-9 w-23.5" />

      <PageHeader className="flex-col items-start gap-8">
        <Skeleton className="h-14 w-full rounded-full" />

        <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <Skeleton className="h-4 w-66 rounded-full" />

          <Skeleton className="h-10 w-40 rounded-md" />
        </div>
      </PageHeader>

      <PageMain className="gap-10">
        <div className="relative h-88 w-full overflow-hidden">
          <Skeleton className="h-full w-full rounded-md" />
        </div>

        <div className="space-y-1">
          <Skeleton className="h-6 w-16 rounded-full" />
          <div className="flex items-center gap-4">
            <Skeleton className="size-16 rounded-full" />
            <div className="space-y-1">
              <Skeleton className="h-4 w-20 rounded-full" />
              <Skeleton className="h-6 w-48 rounded-full" />
            </div>
          </div>

          <Separator />
        </div>

        <div className="flex w-full flex-col-reverse items-center gap-10 md:flex-row">
          <div className="mb-auto flex w-full flex-1 flex-col gap-4">
            <div className="space-y-2">
              <Skeleton className="h-6 w-24 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-6 w-full rounded-full" />
                <Skeleton className="h-6 w-full rounded-full" />
                <Skeleton className="h-6 w-2/3 rounded-full" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-12 rounded-full" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-6 w-12 rounded-full" />
                <Skeleton className="h-6 w-16 rounded-full" />
              </div>
            </div>
          </div>

          <Skeleton className="h-60 w-48 rounded-md" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-9 w-full rounded-md" />
        </div>
      </PageMain>
    </PageContainer>
  )
}
