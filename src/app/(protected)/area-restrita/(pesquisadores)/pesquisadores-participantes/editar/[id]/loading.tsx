import { Button } from '@components/ui/button'
import { Label } from '@components/ui/label'
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
        <PageTitle>Editar Pesquisador</PageTitle>
        <PageDescription>
          Preencha os campos abaixo para atualizar os dados do pesquisador
          participante.
        </PageDescription>
      </PageHeaderContent>
      <form className="space-y-6">
        <PageFormContentField>
          <Label>
            Usuário <span className="text-primary">*</span>
          </Label>
          <div className="mt-1 flex items-center gap-3">
            <Skeleton className="size-10 shrink-0 rounded-full" />
            <Skeleton className="h-6 w-36 rounded-md" />
          </div>
        </PageFormContentField>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <PageFormContentField>
            <Label>
              Matrícula <span className="text-primary">*</span>
            </Label>
            <Skeleton className="h-9 w-full rounded-md" />
          </PageFormContentField>
          <PageFormContentField>
            <Label>
              Senioridade <span className="text-primary">*</span>
            </Label>
            <Skeleton className="h-9 w-full rounded-md" />
          </PageFormContentField>
          <PageFormContentField>
            <Label>
              Grau acadêmico <span className="text-primary">*</span>
            </Label>
            <Skeleton className="h-9 w-full rounded-md" />
          </PageFormContentField>
          <PageFormContentField>
            <Label>Formações</Label>
            <Skeleton className="h-9 w-full rounded-md" />
          </PageFormContentField>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <PageFormContentField>
            <Label>
              Ocupações <span className="text-primary">*</span>
            </Label>
            <Skeleton className="h-16 w-full rounded-md" />
          </PageFormContentField>
          <PageFormContentField>
            <Label>
              Instituição(ões) <span className="text-primary">*</span>
            </Label>
            <Skeleton className="h-16 w-full rounded-md" />
          </PageFormContentField>
        </div>

        <PageFormContentField>
          <Label>ETP(s) principal(is)</Label>
          <Skeleton className="h-16 w-full rounded-md" />
        </PageFormContentField>

        <PageFormContentField>
          <Label>Biografia</Label>
          <Skeleton className="h-16 w-full rounded-md" />
        </PageFormContentField>

        <Button
          className="w-full cursor-pointer"
          disabled
          type="button"
          variant="outline"
        >
          Atualizar pesquisador
        </Button>
      </form>
    </PageContainer>
  )
}
