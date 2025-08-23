import { Alert, AlertDescription } from '@components/ui/alert'
import { Button } from '@components/ui/button'
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@components/ui/dialog'
import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'
import {
  PageForm,
  PageFormContent,
  PageFormContentField,
} from '@components/ui/page-container'
import { Textarea } from '@components/ui/textarea'
import { AlertCircle, Loader2 } from 'lucide-react'
import type { ITeamMember } from 'types/team'
import { SelectMember } from '../../../../_components/select-member'
import { useCreateSDHCTeamMember } from '../../_hooks/use-create-member'

interface ICreateMemberFormProps {
  setIsOpen: (isOpen: boolean) => void
  member?: ITeamMember
}

export function CreateMemberForm({
  setIsOpen,
  member,
}: ICreateMemberFormProps) {
  const { errors, payload, formAction, isLoading } =
    useCreateSDHCTeamMember(setIsOpen)

  return (
    <DialogContent className="max-h-[100vh-2rem] space-y-8 overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Selecione o membro da equipe</DialogTitle>
      </DialogHeader>

      <DialogContent>
        <PageForm action={formAction}>
          <PageFormContent>
            <PageFormContentField>
              <Label>{member ? 'Membro' : 'Usuários'}</Label>

              <SelectMember userId={member?.user?.id} />

              {errors?.user_id && errors.user_id && (
                <Alert className="border-red-500 p-2" variant="destructive">
                  <AlertCircle className="size-4" />
                  <AlertDescription>{errors?.user_id}</AlertDescription>
                </Alert>
              )}
            </PageFormContentField>

            <PageFormContentField>
              <Label>Cargo</Label>

              <Input
                defaultValue={member?.role || (payload?.get('role') as string)}
                name="role"
                placeholder="Cargo"
              />

              {errors?.role && errors.role && (
                <Alert className="border-red-500 p-2" variant="destructive">
                  <AlertCircle className="size-4" />
                  <AlertDescription>{errors?.role}</AlertDescription>
                </Alert>
              )}
            </PageFormContentField>

            <PageFormContentField>
              <Label>Descrição</Label>

              <Textarea
                defaultValue={
                  member?.description || (payload?.get('description') as string)
                }
                name="description"
                placeholder="Descrição"
              />

              {errors?.description && errors.description && (
                <Alert className="border-red-500 p-2" variant="destructive">
                  <AlertCircle className="size-4" />
                  <AlertDescription>{errors?.description}</AlertDescription>
                </Alert>
              )}
            </PageFormContentField>
          </PageFormContent>

          <DialogFooter>
            <Button disabled={isLoading} type="submit">
              {isLoading && <Loader2 className="size-4 animate-spin" />}

              {member ? 'Atualizar membro' : 'Cadastrar membro'}
            </Button>
          </DialogFooter>
        </PageForm>
      </DialogContent>
    </DialogContent>
  )
}
