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
          <PageTitle>Editar Webinário</PageTitle>
          <PageDescription>
            Preencha os campos abaixo para atualizar o webinário
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
              <Skeleton className="h-4 w-24 rounded-md" />
              <Skeleton className="h-80 w-full rounded-md" />
            </PageFormContentField>

            <PageFormContentField>
              <Skeleton className="h-4 w-32 rounded-md" />
              <Skeleton className="h-9 w-full rounded-md" />
            </PageFormContentField>

            <PageFormContentField>
              <Skeleton className="h-4 w-28 rounded-md" />
              <Skeleton className="h-9 w-full rounded-md" />
            </PageFormContentField>

            <PageFormContentField>
              <Skeleton className="h-4 w-36 rounded-md" />
              <Skeleton className="h-9 w-full rounded-md" />
            </PageFormContentField>

            <PageFormContentField>
              <Skeleton className="h-4 w-20 rounded-md" />
              <Skeleton className="h-16 w-full rounded-md" />
            </PageFormContentField>
          </PageFormContent>

          <Skeleton className="h-9 w-full rounded-md" />
        </PageForm>
      </div>
    </PageContainer>
  )
}
