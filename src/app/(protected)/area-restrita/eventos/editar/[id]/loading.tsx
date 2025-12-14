import {
  PageContainer,
  PageDescription,
  PageForm,
  PageFormContent,
  PageFormContentField,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from '@components/ui/page-container'
import { Skeleton } from '@components/ui/skeleton'

export default function Loading() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Editar Evento</PageTitle>
          <PageDescription>
            Preencha os campos abaixo para atualizar o evento
          </PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageForm>
        <PageFormContent>
          <PageFormContentField>
            <Skeleton className="h-4 w-16 rounded-md" />
            <Skeleton className="h-9 w-full rounded-md" />
          </PageFormContentField>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <PageFormContentField>
              <Skeleton className="h-4 w-20 rounded-md" />
              <Skeleton className="h-9 w-full rounded-md" />
            </PageFormContentField>

            <PageFormContentField>
              <Skeleton className="h-4 w-16 rounded-md" />
              <Skeleton className="h-9 w-full rounded-md" />
            </PageFormContentField>
          </div>

          <PageFormContentField>
            <Skeleton className="h-4 w-32 rounded-md" />
            <Skeleton className="h-9 w-full rounded-md" />
          </PageFormContentField>

          <PageFormContentField>
            <Skeleton className="h-4 w-24 rounded-md" />
            <Skeleton className="h-9 w-full rounded-md" />
          </PageFormContentField>

          <PageFormContentField>
            <Skeleton className="h-4 w-20 rounded-md" />
            <Skeleton className="h-79.5 w-full rounded-md" />
          </PageFormContentField>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <PageFormContentField>
              <Skeleton className="h-4 w-32 rounded-md" />
              <Skeleton className="h-9 w-full rounded-md" />
            </PageFormContentField>

            <PageFormContentField>
              <Skeleton className="h-4 w-32 rounded-md" />
              <Skeleton className="h-9 w-full rounded-md" />
            </PageFormContentField>
          </div>

          <PageFormContentField>
            <Skeleton className="h-4 w-24 rounded-md" />
            <Skeleton className="h-29.5 w-full rounded-md" />
          </PageFormContentField>
        </PageFormContent>
        <Skeleton className="h-9 w-full rounded-md" />
      </PageForm>
    </PageContainer>
  )
}
