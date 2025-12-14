import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from '@components/ui/page-container'
import { Skeleton } from '@components/ui/skeleton'
import { ImageUpIcon } from 'lucide-react'

export default function Loading() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Editar Revista</PageTitle>
          <PageDescription>
            Preencha os campos abaixo para atualizar a revista científica
          </PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <div className="space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-4 w-16 rounded-md" />
          <Skeleton className="h-9 w-full rounded-md" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-16 rounded-md" />
          <Skeleton className="h-9 w-full rounded-md" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-32 rounded-md" />
          <Skeleton className="h-9 w-full rounded-md" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-16 rounded-md" />
          <Skeleton className="flex h-79.5 w-full items-center justify-center rounded-xl">
            <div
              aria-hidden="true"
              className="mb-2 flex size-11 items-center justify-center rounded-full"
            >
              <ImageUpIcon className="size-4 opacity-60" />
            </div>
          </Skeleton>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-20 rounded-md" />
          <Skeleton className="h-24 w-full rounded-md" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-16 rounded-md" />
          <Skeleton className="h-9 w-full rounded-md" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-28 rounded-md" />
          <Skeleton className="h-9 w-full rounded-md" />
        </div>

        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    </PageContainer>
  )
}
