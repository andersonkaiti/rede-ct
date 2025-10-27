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
        <PageTitle>Editar ETP</PageTitle>
        <PageDescription>
          Preencha os campos abaixo para atualizar os dados da ETP.
        </PageDescription>
      </PageHeaderContent>
      <form className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <PageFormContentField>
            <Label>
              Código <span className="text-primary">*</span>
            </Label>
            <Skeleton className="h-9 w-full rounded-md" />
          </PageFormContentField>
          <PageFormContentField>
            <Label>
              Nome <span className="text-primary">*</span>
            </Label>
            <Skeleton className="h-9 w-full rounded-md" />
          </PageFormContentField>
          <PageFormContentField>
            <Label>Líder</Label>
            <Skeleton className="h-9 w-full rounded-md" />
          </PageFormContentField>
          <PageFormContentField>
            <Label>Vice-líder</Label>
            <Skeleton className="h-9 w-full rounded-md" />
          </PageFormContentField>
          <PageFormContentField>
            <Label>Secretário(a)</Label>
            <Skeleton className="h-9 w-full rounded-md" />
          </PageFormContentField>
          <PageFormContentField>
            <Label>Membros</Label>
            <Skeleton className="h-16 w-full rounded-md" />
          </PageFormContentField>
        </div>

        <PageFormContentField>
          <Label>Descrição</Label>
          <Skeleton className="h-16 w-full rounded-md" />
        </PageFormContentField>

        <PageFormContentField>
          <Label>Observações</Label>
          <Skeleton className="h-16 w-full rounded-md" />
        </PageFormContentField>

        <Button
          className="w-full cursor-pointer"
          disabled
          type="button"
          variant="outline"
        >
          Atualizar ETP
        </Button>
      </form>
    </PageContainer>
  )
}
