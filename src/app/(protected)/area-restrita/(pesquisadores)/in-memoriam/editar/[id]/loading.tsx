import {
  PageContainer,
  PageDescription,
  PageFormContentField,
  PageHeaderContent,
  PageTitle,
} from '@components/ui/page-container'
import { Skeleton } from '@components/ui/skeleton'

export default function Loading() {
  return (
    <PageContainer>
      <PageHeaderContent>
        <PageTitle>Editar In Memoriam</PageTitle>
        <PageDescription>
          Preencha os campos para adicionar ou atualizar um membro no In
          Memoriam.
        </PageDescription>
      </PageHeaderContent>

      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6 pt-8 xl:grid-cols-[1fr_3fr]">
          <div className="flex flex-col items-center justify-center sm:col-span-1">
            <div className="space-y-2">
              <Skeleton className="h-32 w-32 rounded-full" />
            </div>
          </div>

          <div className="flex flex-col gap-6 sm:col-span-1">
            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        </div>

        <PageFormContentField>
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-16 w-full" />
        </PageFormContentField>

        <Skeleton className="h-10 w-full" />
      </div>
    </PageContainer>
  )
}
