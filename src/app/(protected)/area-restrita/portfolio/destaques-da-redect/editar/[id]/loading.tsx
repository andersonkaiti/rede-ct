import { PageContainer } from '@components/ui/page-container'
import { Skeleton } from '@components/ui/skeleton'

export default function Loading() {
  return (
    <PageContainer>
      <div className="flex flex-col gap-6">
        {/* Page Header */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-8 w-1/3 rounded-md" />
          <Skeleton className="h-4 w-1/2 rounded-md" />
        </div>

        {/* Grid with Type and Name fields */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-16 rounded-md" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-16 rounded-md" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        </div>

        {/* Honored Date field */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-32 rounded-md" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        {/* Honorable Mention checkbox */}
        <div className="flex flex-row items-start space-x-2">
          <Skeleton className="h-5 w-5 rounded-md" />
          <div className="flex flex-col gap-1">
            <Skeleton className="h-4 w-28 rounded-md" />
            <Skeleton className="h-3 w-80 rounded-md" />
          </div>
        </div>

        {/* Merit URL field */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-24 rounded-md" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        {/* Image Upload field */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-16 rounded-md" />
          <Skeleton className="h-40 w-full rounded-md" />
        </div>

        {/* Description textarea */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-20 rounded-md" />
          <Skeleton className="h-24 w-full rounded-md" />
        </div>

        {/* Submit button */}
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    </PageContainer>
  )
}
