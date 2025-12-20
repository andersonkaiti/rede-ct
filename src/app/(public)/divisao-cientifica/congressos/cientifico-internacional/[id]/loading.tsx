import { Separator } from '@components/ui/separator'
import { Skeleton } from '@components/ui/skeleton'
import { ImageIcon } from 'lucide-react'
import {
  PageContainer,
  PageHeader,
  PageMain,
} from '../../../../_components/page-container'

export default function Loading() {
  return (
    <PageContainer>
      <Skeleton className="h-9 w-33 rounded-md" />

      <PageHeader className="flex-col items-start gap-8">
        <Skeleton className="h-6.5 w-20.5 rounded-full" />

        <Skeleton className="h-15 w-3/4 rounded-md" />

        <div className="flex flex-col items-start gap-4 text-muted-foreground text-sm md:flex-row md:items-center">
          <Skeleton className="h-5 w-48 rounded-md" />
          <Skeleton className="h-5 w-32 rounded-md" />
        </div>

        <div className="flex w-full flex-col gap-2">
          <div className="flex flex-col items-center gap-2 md:flex-row">
            <Skeleton className="h-10 w-40 rounded-md" />

            <Separator
              orientation="vertical"
              className="hidden h-3! sm:block"
            />

            <Skeleton className="h-10 w-32 rounded-md" />
          </div>

          <Separator />
        </div>
      </PageHeader>

      <PageMain className="gap-16">
        <div className="space-y-2">
          <Skeleton className="h-5 w-full rounded-md" />
          <Skeleton className="h-5 w-full rounded-md" />
          <Skeleton className="h-5 w-2/3 rounded-md" />
        </div>

        <section className="my-4 space-y-8">
          <Skeleton className="h-8 w-64 rounded-md" />

          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} className="h-12.5 w-full rounded-xl" />
            ))}
          </div>
        </section>

        <section className="my-4 space-y-8">
          <Skeleton className="h-8 w-48 rounded-md" />

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton
                key={index}
                className="flex h-60 w-full items-center justify-center"
              >
                <ImageIcon className="text-muted-foreground" />
              </Skeleton>
            ))}
          </div>
        </section>

        <section className="my-4 space-y-8">
          <Skeleton className="h-8 w-48 rounded-md" />

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton
                key={index}
                className="flex h-60 w-full items-center justify-center"
              >
                <ImageIcon className="text-muted-foreground" />
              </Skeleton>
            ))}
          </div>
        </section>
      </PageMain>
    </PageContainer>
  )
}
