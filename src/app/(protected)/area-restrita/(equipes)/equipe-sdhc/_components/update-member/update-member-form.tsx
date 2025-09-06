import { Alert, AlertDescription } from '@components/ui/alert'
import { Button } from '@components/ui/button'
import {
  DialogClose,
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
import { SelectMember } from '../../../../_components/select-member'
import { useUpdateSDHCTeamMember } from '../../_hooks/use-update-member'

interface IUpdateMemberFormProps {
  setIsOpen: (isOpen: boolean) => void
}

export function UpdateMemberForm({ setIsOpen }: IUpdateMemberFormProps) {
  const { errors, payload, formAction, isLoading, member, message } =
    useUpdateSDHCTeamMember({
      setIsOpen,
    })

  if (!member) {
    return null
  }

  return (
    <DialogContent className="max-h-[100vh-2rem] space-y-8 overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Selecione o membro da equipe</DialogTitle>
      </DialogHeader>

      <DialogContent>
        <PageForm action={formAction}>
          <PageFormContent>
            {message && (
              <Alert className="mb-4 border-primary" variant="destructive">
                <AlertCircle className="size-4" />
                <AlertDescription>{message}</AlertDescription>
              </Alert>
            )}

            <PageFormContentField>
              <Label>Membro</Label>

              <SelectMember
                userId={member.userId || (payload?.get('memberId') as string)}
              />

              {errors?.userId && errors.userId && (
                <Alert className="border-primary p-2" variant="destructive">
                  <AlertCircle className="size-4" />
                  <AlertDescription>{errors.userId}</AlertDescription>
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
                <Alert className="border-primary p-2" variant="destructive">
                  <AlertCircle className="size-4" />
                  <AlertDescription>{errors.role}</AlertDescription>
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
                <Alert className="border-primary p-2" variant="destructive">
                  <AlertCircle className="size-4" />
                  <AlertDescription>{errors.description}</AlertDescription>
                </Alert>
              )}
            </PageFormContentField>
          </PageFormContent>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost">Cancelar</Button>
            </DialogClose>
            <Button disabled={isLoading} type="submit">
              {isLoading && <Loader2 className="size-4 animate-spin" />}
              Atualizar membro
            </Button>
          </DialogFooter>
        </PageForm>
      </DialogContent>
    </DialogContent>
  )
}
