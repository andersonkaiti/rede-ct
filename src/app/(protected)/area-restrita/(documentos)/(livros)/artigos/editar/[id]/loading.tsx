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
          <PageTitle>Editar Artigo</PageTitle>
          <PageDescription>
            Preencha os campos abaixo para atualizar o artigo científico
          </PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <div>
        <PageForm>
          <PageFormContent>
            <PageFormContentField>
              <Skeleton className="h-4 w-16 rounded-md" />
              <Skeleton className="h-9 w-full rounded-md" />
            </PageFormContentField>

            <PageFormContentField>
              <Skeleton className="h-4 w-16 rounded-md" />
              <Skeleton className="h-9 w-full rounded-md" />
            </PageFormContentField>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <PageFormContentField>
                <Skeleton className="h-4 w-32 rounded-md" />
                <Skeleton className="h-9 w-full rounded-md" />
              </PageFormContentField>

              <PageFormContentField>
                <Skeleton className="h-4 w-36 rounded-md" />
                <Skeleton className="h-9 w-full rounded-md" />
              </PageFormContentField>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <PageFormContentField>
                <Skeleton className="h-4 w-16 rounded-md" />
                <Skeleton className="h-9 w-full rounded-md" />
              </PageFormContentField>

              <PageFormContentField>
                <Skeleton className="h-4 w-16 rounded-md" />
                <Skeleton className="h-9 w-full rounded-md" />
              </PageFormContentField>

              <PageFormContentField>
                <Skeleton className="h-4 w-12 rounded-md" />
                <Skeleton className="h-9 w-full rounded-md" />
              </PageFormContentField>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <PageFormContentField>
                <Skeleton className="h-4 w-28 rounded-md" />
                <Skeleton className="h-9 w-full rounded-md" />
              </PageFormContentField>

              <PageFormContentField>
                <Skeleton className="h-4 w-28 rounded-md" />
                <Skeleton className="h-9 w-full rounded-md" />
              </PageFormContentField>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <PageFormContentField>
                <Skeleton className="h-4 w-28 rounded-md" />
                <Skeleton className="h-9 w-full rounded-md" />
              </PageFormContentField>

              <PageFormContentField>
                <Skeleton className="h-4 w-28 rounded-md" />
                <Skeleton className="h-9 w-full rounded-md" />
              </PageFormContentField>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <PageFormContentField>
                <Skeleton className="h-4 w-16 rounded-md" />
                <Skeleton className="h-9 w-full rounded-md" />
              </PageFormContentField>

              <PageFormContentField>
                <Skeleton className="h-4 w-16 rounded-md" />
                <Skeleton className="h-9 w-full rounded-md" />
              </PageFormContentField>

              <PageFormContentField>
                <Skeleton className="h-4 w-12 rounded-md" />
                <Skeleton className="h-9 w-full rounded-md" />
              </PageFormContentField>
            </div>

            <PageFormContentField>
              <Skeleton className="h-4 w-28 rounded-md" />
              <Skeleton className="h-9 w-full rounded-md" />
            </PageFormContentField>

            <PageFormContentField>
              <Skeleton className="h-4 w-20 rounded-md" />
              <Skeleton className="h-24 w-full rounded-md" />
            </PageFormContentField>
          </PageFormContent>

          <Skeleton className="h-9 w-full rounded-md" />
        </PageForm>
      </div>
    </PageContainer>
  )
}
