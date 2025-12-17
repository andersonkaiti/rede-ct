import { Skeleton } from '@components/ui/skeleton'
import {
  PageContainer,
  PageHeaderContent,
} from '@/app/(protected)/_components/page-container'

export default function Loading() {
  return (
    <PageContainer>
      <PageHeaderContent>
        <Skeleton className="h-9 w-2/4" />
        <Skeleton className="h-5 w-1/4" />
      </PageHeaderContent>

      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6 pt-8 xl:grid-cols-[1fr_3fr]">
          <div className="flex flex-col items-center justify-center sm:col-span-1">
            <div className="space-y-2">
              <Skeleton className="size-49.5 rounded-full" />
              <Skeleton className="mx-auto mt-6 h-4 w-20" />
              <Skeleton className="mx-auto h-3 w-24" />
            </div>
          </div>

          <div className="flex flex-col gap-6 sm:col-span-1">
            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-9 w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-9 w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-9 w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-9 w-full" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-16 w-full" />
        </div>

        <Skeleton className="h-9 w-full" />
      </div>
    </PageContainer>
  )
}
