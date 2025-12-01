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
          <PageTitle>Editar Programa de Pós-Graduação</PageTitle>
          <PageDescription>
            Preencha os campos abaixo para atualizar o programa de pós-graduação
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
              Contato <span className="text-primary">*</span>
            </Label>

            <Skeleton className="h-9 w-full rounded-md" />
          </PageFormContentField>

          <PageFormContentField>
            <Label>
              Imagem <span className="text-primary">*</span>
            </Label>

            <Skeleton className="h-80 w-full rounded-md" />
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
            <Label>Link de Inscrição</Label>

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
