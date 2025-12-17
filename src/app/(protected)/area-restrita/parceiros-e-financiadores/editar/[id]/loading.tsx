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
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <div className="space-y-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-9 w-full rounded-md" />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-9 w-full rounded-md" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-9 w-full rounded-md" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-9 w-full rounded-md" />
                </div>
                <div className="space-y-4">
                  <Skeleton className="h-4 w-12" />
                  <div className="flex items-center space-x-2">
                    <Skeleton className="size-4 rounded" />
                    <div className="space-y-1">
                      <Skeleton className="h-5 w-12" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-32 w-full rounded-md" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="space-y-4">
                <Skeleton className="h-5 w-16" />
                <Skeleton className="h-79.5 w-full rounded-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-6">
          <Skeleton className="h-9 w-full rounded-md" />
        </div>
      </form>
    </PageContainer>
  )
}
