import { Label } from '@components/ui/label'
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
              <Label>
                Título <span className="text-primary">*</span>
              </Label>

              <Skeleton className="h-9 w-full rounded-md" />
            </PageFormContentField>

            <PageFormContentField>
              <Label>
                Thumbnail <span className="text-primary">*</span>
              </Label>

              <Skeleton className="h-80 w-full rounded-md" />
            </PageFormContentField>

            <PageFormContentField>
              <Label>Convidados(as)</Label>

              <Skeleton className="h-9 w-full rounded-md" />
            </PageFormContentField>

            <PageFormContentField>
              <Label>
                Data e Hora <span className="text-primary">*</span>
              </Label>

              <Skeleton className="h-9 w-full rounded-md" />
            </PageFormContentField>

            <PageFormContentField>
              <Label>Link do Webinário</Label>

              <Skeleton className="h-9 w-full rounded-md" />
            </PageFormContentField>

            <PageFormContentField>
              <Label>Descrição</Label>

              <Skeleton className="h-16 w-full rounded-md" />
            </PageFormContentField>
          </PageFormContent>

          <Skeleton className="h-9 w-full rounded-md" />
        </PageForm>
      </div>
    </PageContainer>
  )
}
