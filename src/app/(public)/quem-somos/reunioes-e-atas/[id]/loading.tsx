import { Separator } from '@components/ui/separator'
import { Skeleton } from '@components/ui/skeleton'
import { PageContainer, PageMain } from '../../../_components/page-container'

export default function Loading() {
  return (
    <PageContainer>
      <Skeleton className="h-9 w-23.5" />

      <header className="space-y-8">
        <Skeleton className="h-14 w-full rounded-full" />

        <time className="flex items-center gap-x-1 text-muted-foreground text-sm">
          <Skeleton className="h-4 w-66 rounded-full" />
        </time>
      </header>

      <PageMain className="space-y-7">
        <header className="flex gap-2">
          <Skeleton className="h-6 w-24 rounded-full" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </header>

        <div className="space-y-2">
          <Skeleton className="h-5 w-48 rounded-full" />
          <Skeleton className="h-5 w-96 rounded-full" />
        </div>

        <section className="space-y-2">
          <Skeleton className="h-5 w-16 rounded-full" />
          <div className="space-y-4">
            <Skeleton className="h-5 w-full rounded-full" />
            <Skeleton className="h-5 w-full rounded-full" />
            <Skeleton className="h-5 w-2/3 rounded-full" />
          </div>
        </section>

        <Separator />

        <div className="flex w-full cursor-pointer items-center justify-between">
          <Skeleton className="h-5 w-32 rounded-full" />
          <Skeleton className="size-4 rounded-full" />
        </div>

        <Skeleton className="h-10 w-full rounded-md" />
      </PageMain>
    </PageContainer>
  )
}
