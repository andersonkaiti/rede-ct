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
          <PageTitle>Editar Evento</PageTitle>
          <PageDescription>
            Preencha os campos abaixo para atualizar o evento
          </PageDescription>
        </PageHeaderContent>
      </PageHeader>

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
              Formato <span className="text-primary">*</span>
            </Label>
            <Skeleton className="h-9 w-full rounded-md" />
          </PageFormContentField>

          <PageFormContentField>
            <Label>Imagem</Label>
            <Skeleton className="h-79.5 w-full rounded-md" />
          </PageFormContentField>

          <PageFormContentField>
            <Label>
              Data de Início <span className="text-primary">*</span>
            </Label>
            <Skeleton className="h-9 w-full rounded-md" />
          </PageFormContentField>

          <PageFormContentField>
            <Label>
              Data de Término <span className="text-primary">*</span>
            </Label>
            <Skeleton className="h-9 w-full rounded-md" />
          </PageFormContentField>

          <PageFormContentField>
            <Label>Status</Label>
            <Skeleton className="h-9 w-full rounded-md" />
          </PageFormContentField>

          <PageFormContentField>
            <Label>Descrição</Label>
            <Skeleton className="h-29.5 w-full rounded-md" />
          </PageFormContentField>
        </PageFormContent>
        <Skeleton className="h-9 w-full rounded-md" />
      </PageForm>
    </PageContainer>
  )
}
