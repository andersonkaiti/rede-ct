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
        <PageTitle>Editar ETP</PageTitle>
        <PageDescription>
          Preencha os campos abaixo para atualizar os dados da ETP.
        </PageDescription>
      </PageHeaderContent>
      <form className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <PageFormContentField>
            <Skeleton className="h-4 w-20 rounded-md" />
            <Skeleton className="h-9 w-full rounded-md" />
          </PageFormContentField>
          <PageFormContentField>
            <Skeleton className="h-4 w-16 rounded-md" />
            <Skeleton className="h-9 w-full rounded-md" />
          </PageFormContentField>
          <PageFormContentField>
            <Skeleton className="h-4 w-16 rounded-md" />
            <Skeleton className="h-9 w-full rounded-md" />
          </PageFormContentField>
          <PageFormContentField>
            <Skeleton className="h-4 w-24 rounded-md" />
            <Skeleton className="h-9 w-full rounded-md" />
          </PageFormContentField>
          <PageFormContentField>
            <Skeleton className="h-4 w-28 rounded-md" />
            <Skeleton className="h-9 w-full rounded-md" />
          </PageFormContentField>
          <PageFormContentField>
            <Skeleton className="h-4 w-20 rounded-md" />
            <Skeleton className="h-16 w-full rounded-md" />
          </PageFormContentField>
        </div>

        <PageFormContentField>
          <Skeleton className="h-4 w-24 rounded-md" />
          <Skeleton className="h-16 w-full rounded-md" />
        </PageFormContentField>

        <PageFormContentField>
          <Skeleton className="h-4 w-28 rounded-md" />
          <Skeleton className="h-16 w-full rounded-md" />
        </PageFormContentField>

        <Skeleton className="h-9 w-full rounded-md" />
      </form>
    </PageContainer>
  )
}
